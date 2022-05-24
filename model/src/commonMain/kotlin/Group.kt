package ru.altmanea.edu.server.model

import kotlinx.serialization.*

@Serializable
class Group(
    var name: String,
    var code: String,
    var formOfEducation: String
) {
    override fun toString(): String {
        return "$code $name, $formOfEducation"
    }
}