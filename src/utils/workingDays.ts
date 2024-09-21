type WorkDay = {
    from: string;
    to: string;
  };
  
  export const workingDays = (workDays: WorkDay[] | undefined): string[] => {
    if (
      workDays &&
      workDays.length > 0 &&
      'from' in workDays[0] &&
      'to' in workDays[0]
    ) {
      return workDays.map((day) => {
        const { from, to } = day;
        return `${from} - ${to}`;
      });
    } else {
      return ['Day and night'];
    }
  };