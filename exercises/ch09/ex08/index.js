// 状態の列挙
export const State = Object.freeze({
  NORMAL: "normal", // 通常
  ALARM_SET: "alarmSet", // アラームセット中
  ALARM_SOUNDING: "alarmSounding", // アラーム鳴動中
  SNOOZING: "snoozing", // スヌーズ中
});

// アクションの列挙
export const Action = Object.freeze({
  NONE: "none", // 何もしない
  SOUND_ALARM: "soundAlarm", // アラームを鳴らす
  STOP_ALARM: "stopAlarm", // アラームを止める
});

// ===========================
// イベント関数群
// ===========================

// アラーム設定イベント
export function setAlarm(state) {
  switch (state) {
    case State.NORMAL:
      return { nextState: State.ALARM_SET, action: Action.NONE };
    default:
      return { nextState: state, action: Action.NONE };
  }
}

// アラーム解除イベント
export function cancelAlarm(state) {
  switch (state) {
    case State.ALARM_SET:
      return { nextState: State.NORMAL, action: Action.NONE };
    case State.ALARM_SOUNDING:
      return { nextState: State.NORMAL, action: Action.STOP_ALARM };
    case State.SNOOZING:
      return { nextState: State.NORMAL, action: Action.NONE };
    default:
      return { nextState: state, action: Action.NONE };
  }
}

// アラーム設定時刻到達イベント
export function reachedToAlarmTime(state) {
  switch (state) {
    case State.ALARM_SET:
      return { nextState: State.ALARM_SOUNDING, action: Action.SOUND_ALARM };
    default:
      return { nextState: state, action: Action.NONE };
  }
}

// スヌーズイベント
export function snooze(state) {
  switch (state) {
    case State.ALARM_SOUNDING:
      return { nextState: State.SNOOZING, action: Action.STOP_ALARM };
    default:
      return { nextState: state, action: Action.NONE };
  }
}

// スヌーズ設定時間経過イベント
export function elapseSnoozeTime(state) {
  switch (state) {
    case State.SNOOZING:
      return { nextState: State.ALARM_SOUNDING, action: Action.SOUND_ALARM };
    default:
      return { nextState: state, action: Action.NONE };
  }
}
