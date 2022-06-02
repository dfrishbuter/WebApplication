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
        const val groupsURL = "$serverUrl$groupsPath"

        const val subjectsPath = "${pathPrefix}subjects/"
        const val subjectsURL = "$serverUrl$subjectsPath"

        const val workPlansByTeacherCommonPath = "work_plans/by_teacher"
        const val workPlansByTeacherPath = "$pathPrefix$workPlansByTeacherCommonPath"
        const val workPlansByTeacherURL = "$serverUrl$workPlansByTeacherPath"

        const val workPlansByGroupCommonPath = "work_plans/by_group"
        const val workPlansByGroupPath = "$pathPrefix$workPlansByGroupCommonPath"
        const val workPlansByGroupURL = "$serverUrl$workPlansByGroupPath"

        const val workPlansBySubjectCommonPath = "work_plans/by_subject"
        const val workPlansBySubjectPath = "$pathPrefix$workPlansBySubjectCommonPath"
        const val workPlansBySubjectURL = "$serverUrl$workPlansBySubjectPath"

        const val workPlansBaseURL = "$serverUrl$pathPrefix/work_plans"

        const val importURL = "$serverUrl$pathPrefix/source_file"
        var sourceFileURL = ""
    }
}