package ru.altmanea.edu.server.repo

import ru.altmanea.edu.server.model.Config
import ru.altmanea.edu.server.model.Teacher
import ru.altmanea.edu.server.model.Group
import org.apache.poi.xssf.usermodel.XSSFWorkbook
import ru.altmanea.edu.server.model.WorkPlan

val controller = Controller(XSSFWorkbook("src/main/resources/schedule.xlsx"), 0)
val workPlansTestData = controller.getWorkPlans()

val teachersRepo = ListRepo<Teacher>()
val groupsRepo = ListRepo<Group>()
val subjectsRepo = ListRepo<String>()
val workPlansRepo = ListRepo<WorkPlan>()

fun ListRepo<Teacher>.urlByUUID(uuid: String) =
    this[uuid]?.let {
        Config.teachersURL + it.uuid
    }

fun ListRepo<Teacher>.urlByName(name: String) =
    this.find { it.lastName == name }.let {
        if (it.size == 1)
            Config.teachersURL + it.first().uuid
        else
            null
    }

