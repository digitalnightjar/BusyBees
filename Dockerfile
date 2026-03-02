FROM node:20 AS build-frontend
WORKDIR /src/busybees.ui
COPY busybees.ui/package*.json ./
RUN npm install
COPY busybees.ui/ .
RUN npm run build --configuration=production

FROM mcr.microsoft.com/dotnet/sdk:10.0 AS build-backend
WORKDIR /src
COPY busybees.api/busybees.api.csproj ./busybees.api/
RUN dotnet restore ./busybees.api/busybees.api.csproj
COPY busybees.api/ ./busybees.api/
COPY --from=build-frontend /src/busybees.api/wwwroot ./busybees.api/wwwroot
RUN dotnet publish ./busybees.api/busybees.api.csproj -c Release -o /app/publish

FROM mcr.microsoft.com/dotnet/aspnet:10.0
WORKDIR /app
COPY --from=build-backend /app/publish .
RUN mkdir -p /app/data
ENV ASPNETCORE_URLS=http://+:80
EXPOSE 80
ENTRYPOINT [ "dotnet", "busybees.api.dll" ]
