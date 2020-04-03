"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Task = /** @class */ (function () {
    function Task(taskId, description, startDate, endDate, status, topic, userId) {
        this.taskId = taskId;
        this.description = description;
        this.startDate = startDate;
        this.endDate = endDate;
        this.status = status;
        this.topic = topic;
        this.userId = userId;
    }
    ;
    return Task;
}());
exports.Task = Task;
//# sourceMappingURL=task.js.map