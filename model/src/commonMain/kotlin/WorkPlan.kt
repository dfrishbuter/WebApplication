package ru.altmanea.edu.server.model

import kotlinx.serialization.*
@Serializable
class WorkPlan(
    val id: String,
    val faculty: String,
    val block: String,
    val subject: String,
    val semester: Int,
    val teacher: Teacher,
    val groups: Array<Group>,
    var numberOfStudents: Int,
    val typeOfLoad: String,
    val hours: Float,
    val typeOfEmployment: String
)