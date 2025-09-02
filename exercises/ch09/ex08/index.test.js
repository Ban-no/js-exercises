import {
  State,
  Action,
  setAlarm,
  cancelAlarm,
  reachedToAlarmTime,
  snooze,
  elapseSnoozeTime,
} from "./index.js";

// 状態遷移図のすべての矢印をテストする
describe("AlarmClock state transitions (functional)", () => {
  // 通常
  it("NORMAL --setAlarm--> ALARM_SET", () => {
    const { nextState, action } = setAlarm(State.NORMAL);
    expect(nextState).toBe(State.ALARM_SET);
    expect(action).toBe(Action.NONE);
  });

  // アラームセット中
  it("ALARM_SET --cancelAlarm--> NORMAL", () => {
    const { nextState, action } = cancelAlarm(State.ALARM_SET);
    expect(nextState).toBe(State.NORMAL);
    expect(action).toBe(Action.NONE);
  });

  it("ALARM_SET --reachedToAlarmTime--> ALARM_SOUNDING", () => {
    const { nextState, action } = reachedToAlarmTime(State.ALARM_SET);
    expect(nextState).toBe(State.ALARM_SOUNDING);
    expect(action).toBe(Action.SOUND_ALARM);
  });

  // アラーム鳴動中
  it("ALARM_SOUNDING --cancelAlarm--> NORMAL", () => {
    const { nextState, action } = cancelAlarm(State.ALARM_SOUNDING);
    expect(nextState).toBe(State.NORMAL);
    expect(action).toBe(Action.STOP_ALARM);
  });

  it("ALARM_SOUNDING --snooze--> SNOOZING", () => {
    const { nextState, action } = snooze(State.ALARM_SOUNDING);
    expect(nextState).toBe(State.SNOOZING);
    expect(action).toBe(Action.STOP_ALARM);
  });

  // スヌーズ中
  it("SNOOZING --elapseSnoozeTime--> ALARM_SOUNDING", () => {
    const { nextState, action } = elapseSnoozeTime(State.SNOOZING);
    expect(nextState).toBe(State.ALARM_SOUNDING);
    expect(action).toBe(Action.SOUND_ALARM);
  });

  it("SNOOZING --cancelAlarm--> NORMAL", () => {
    const { nextState, action } = cancelAlarm(State.SNOOZING);
    expect(nextState).toBe(State.NORMAL);
    expect(action).toBe(Action.NONE);
  });
});
