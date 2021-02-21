export const swaggerConfig = {
  swagger: "2.0",
  info: {
    version: "1.0.0",
    title: "DownVuer Backend",
    description: "DownVuer backend - server for download media from many sites",
    license: { name: "MIT", url: "https://opensource.org/licenses/MIT" },
  },
  host: "localhost:3000",
  basePath: "/",
  tags: [{ title: "DownVuer", purpose: "Download youtube" }],
  schemes: ["http"],
  consumes: ["application/json"],
  produces: ["application/json"],
  paths: {
    "/api/partial": {
      post: {
        tags: ["partial"],
        summary: "Download media partially",
        parameters: [
          {
            youtubeURL: "https://www.youtube.com/watch?v=Kbj2Zss-5GY",
            format: "18",
            extention: "mp3",
            schema: { $ref: "#/definitions/partial" },
          },
        ],
        produces: ["application/json"],
        responses: {
          200: {
            description: "Media downloaded",
            schema: { $ref: "#/definitions/partial" },
          },
        },
      },
    },
    "/api/file/info": {
      "post": {
        "tags": ["info"],
        "description": "Create new user in system",
        "parameters": [
          {
            "youtubeURL": "https://www.youtube.com/watch?v=Kbj2Zss-5GY",
            "schema": { "$ref": "#/definitions/info" },
          },
        ],
        
        "responses": {
          "200": {
            "description": "Media downloaded",
            "schema": { "$ref": "#/definitions/info" },
          },
        },
      },
    },
  },
  definitions: {
    partial: {
      required: ["youtubeURL", "format", "extention"],
      properties: {
        youtubeURL: { type: "string" },
        format: { type: "string" },
        extention: { type: "string" },
      },
    },
    info: {
      required: ["youtubeURL"],
      properties: {
        youtubeURL: { type: "string" },
      },
    },
  },
};
