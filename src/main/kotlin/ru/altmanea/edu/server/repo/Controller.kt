package ru.altmanea.edu.server.repo

import org.apache.poi.xssf.usermodel.*
import org.apache.poi.ss.usermodel.CellType

import ru.altmanea.edu.server.model.Teacher
import ru.altmanea.edu.server.model.Group
import ru.altmanea.edu.server.model.WorkPlan

class Controller(tableFile: XSSFWorkbook, sheetIndex: Int) {
    private val table = tableFile.getSheetAt(sheetIndex)

    fun getWorkPlans(): MutableList<WorkPlan> {
        val workPlans: MutableList<WorkPlan> = mutableListOf()
        for (rowNumber in 3..table.lastRowNum) {
            val row = table.getRow(rowNumber) ?: continue
            val idCell = getCell(row, 1) ?: continue
            val facultyCell = getCell(row, 2) ?: continue
            val blockCell = getCell(row, 3) ?: continue
            val subjectCell = getCell(row, 4) ?: continue
            val semesterCell = getCell(row, 5) ?: continue
            val groupCell = getCell(row, 6) ?: continue
            val numberOfStudentsCell = getCell(row, 7) ?: continue
            val typeOfLoadCell = getCell(row, 8) ?: continue
            val hoursCell = getCell(row, 9) ?: continue
            val teacherCell = getCell(row, 10) ?: continue
            val typeOfEmploymentCell = getCell(row, 11) ?: continue

            val nameComponents = teacherCell.toString().split("\\s".toRegex()).toTypedArray()
            val teacher = Teacher(
                firstName = nameComponents[0],
                lastName = nameComponents[1],
                patronymic = nameComponents[2]
            )

            val isPartTime = typeOfLoadCell.toString().contains("Заочное")
            val numberOfStudentsString = numberOfStudentsCell.toString()
            val numberOfStudents = numberOfStudentsString.toInt()
            val groupData = groupCell.toString()
            val regex = "[0-9]{2,}-?[\\p{L}]{1,2}".toRegex()
            val groupCodes = regex.findAll(groupData).map { it.value }.toList()
            val groups: Array<Group>
            if (groupCodes.count() > 1) {
                val groupNames = removeOccurrences(groupCodes, groupData).trimStart { listOf(',', ' ').contains(it)}.split(",")
                groups = groupCodes.zip(groupNames).map {
                    Group(
                        name = removeOccurrences(listOf("Очная", "Заочная", "Очно-заочная"), it.second.trim()),
                        code = it.first,
                        formOfEducation = if (isPartTime) "Заочная" else "Очная"
                    )
                }.toTypedArray()
            } else {
                groups = listOf(
                    Group(
                        name = removeOccurrences(listOf("Очная", "Заочная", "Очно-заочная"), removeOccurrences(groupCodes, groupData)),
                        code = groupCodes.first(),
                        formOfEducation = if (isPartTime) "Заочная" else "Очная"
                    )
                ).toTypedArray()
            }

            val workPlan = WorkPlan(
                id = idCell.toString(),
                faculty = facultyCell.toString(),
                block = blockCell.toString(),
                subject = subjectCell.toString(),
                semester = semesterCell.toString().toInt(),
                teacher = teacher,
                groups = groups,
                numberOfStudents = numberOfStudents,
                typeOfLoad = typeOfLoadCell.toString(),
                hours = hoursCell.toString().replace(",", ".").toFloat(),
                typeOfEmployment = typeOfEmploymentCell.toString()
            )
            workPlans.add(workPlan)
        }
        return workPlans
    }

    private fun getCell(row: XSSFRow, cellnum: Int): XSSFCell? {
        val cell = row.getCell(cellnum) ?: return null
        if (cell.cellType == CellType.BLANK) {
            return null
        }
        return cell
    }

    private fun removeOccurrences(occurrences: List<String>, sourceString: String): String {
        var mutatedString: String = sourceString
        occurrences.forEach {
            mutatedString = mutatedString.replace(it, "").trim()
        }
        return mutatedString
    }
}