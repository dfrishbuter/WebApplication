package ru.altmanea.edu.server.repo

import ru.altmanea.edu.server.model.Config
import ru.altmanea.edu.server.model.Teacher
import ru.altmanea.edu.server.model.Group
import org.apache.poi.xssf.usermodel.XSSFWorkbook
import ru.altmanea.edu.server.model.WorkPlan

var teachersRepo = ListRepo<Teacher>()
var groupsRepo = ListRepo<Group>()
var subjectsRepo = ListRepo<String>()
var workPlansRepo = ListRepo<WorkPlan>()

