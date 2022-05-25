package ru.altmanea.edu.server.rest

import io.ktor.application.*
import io.ktor.http.*
import io.ktor.response.*
import io.ktor.routing.*
import ru.altmanea.edu.server.model.Config
import ru.altmanea.edu.server.repo.workPlansRepo

fun Route.workPlan() =
    route(Config.workPlansPath) {
        get {
            if (!workPlansRepo.isEmpty()) {
                call.respond(workPlansRepo.findAll())
            } else {
                call.respondText("No work plans found", status = HttpStatusCode.NotFound)
            }
        }
    }