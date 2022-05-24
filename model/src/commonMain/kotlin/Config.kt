package ru.altmanea.edu.server.model

class Config {
    companion object {
        const val serverDomain = "localhost"
        const val serverPort = 8080
        const val serverApi = "1"
        const val serverUrl = "http://$serverDomain:$serverPort/"
        const val pathPrefix = "api$serverApi/"

        const val teachersPath = "${pathPrefix}teachers/"
        const val teachersURL = "$serverUrl$teachersPath"

        const val groupsPath = "${pathPrefix}groups/"
        const val groupsURL = "$serverUrl${groupsPath}"

        const val subjectsPath = "${pathPrefix}subjects/"
        const val subjectsURL = "$serverUrl${subjectsPath}"
    }
}