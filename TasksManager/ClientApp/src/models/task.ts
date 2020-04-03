import { TaskStatus } from "./TaskStatus";

export class Task {
  constructor(
    public taskId?: number,
    public description?: string,
    public startDate?: Date,
    public endDate?: Date,
    public status?: TaskStatus,
    public topic?: string,
    public userId?: number,
  )
  {  };

}
