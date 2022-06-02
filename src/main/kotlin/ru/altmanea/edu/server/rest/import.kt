package ru.altmanea.edu.server.rest

import io.ktor.application.*
import io.ktor.http.*
import io.ktor.request.*
import io.ktor.response.*
import io.ktor.routing.*
import ru.altmanea.edu.server.model.Config

fun Route.import(completion: (String) -> Unit) =
    route(Config.importPath) {
        post {
            completion(call.receive<String>().replace("\"", ""))
            call.respondText("Source file url saved successfully", status = HttpStatusCode.Created)
        }
    }