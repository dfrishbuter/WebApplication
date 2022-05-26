package ru.altmanea.edu.server.rest

import io.ktor.application.*
import io.ktor.http.*
import io.ktor.response.*
import io.ktor.routing.*
import ru.altmanea.edu.server.model.Config
import ru.altmanea.edu.server.repo.groupsRepo

fun Route.group() =
    route(Config.groupsPath) {
        get {
            if (!groupsRepo.isEmpty()) {
                call.respond(groupsRepo.findAll())
            } else {
                call.respondText("No groups found", status = HttpStatusCode.NotFound)
            }
        }
    }