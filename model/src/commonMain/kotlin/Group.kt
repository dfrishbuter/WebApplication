package ru.altmanea.edu.server.model

import kotlinx.serialization.*

@Serializable
class Group(
    var name: String,
    var code: String,
    var formOfEducation: FormOfEducation
) {
    val description: String
        get() = "$code $name, $formOfEducation"
}