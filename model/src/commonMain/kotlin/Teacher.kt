package ru.altmanea.edu.server.model

import kotlinx.serialization.*

@Serializable
class Teacher(
    val firstName: String,
    val lastName: String,
    val patronymic: String
)