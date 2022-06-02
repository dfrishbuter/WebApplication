package ru.altmanea.edu.server.repo

import ru.altmanea.edu.server.model.Config
import ru.altmanea.edu.server.model.Teacher
import ru.altmanea.edu.server.model.Group
import org.apache.poi.xssf.usermodel.XSSFWorkbook
import ru.altmanea.edu.server.model.WorkPlan

val teachersRepo = ListRepo<Teacher>()
val groupsRepo = ListRepo<Group>()
val subjectsRepo = ListRepo<String>()
val workPlansRepo = ListRepo<WorkPlan>()

