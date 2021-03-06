export function Timer(initial_time, tick = 1000, callBack) {
  this.initial_time = initial_time;
  this.timer_id = "";
  this.tick = tick;
  this.residue_time = initial_time;
  this.callBack = callBack;
  this.loop = false;

  this.startTimer = function (loop = false) {
    this.loop = loop;
    this.timer_id = setInterval(this.timing, this.tick, this);
  };

  this.timing = function (context) {
    if (context.residue_time - 1 > 0) {
      context.residue_time -= 1;
    } else {
      context.residue_time = context.initial_time;
      context.callBack();
      !context.loop && clearInterval(context.timer_id);
    }
  }
};

export function richInput(data) {
  this.value = null;
  this.type = data.type || "text";
  this.title = data.title || "";
  this.placeholder = data.placeholder || "";
  this.placeholder_init = data.placeholder || "";
  this.disabled = false;
  this.incorrect = false;
  this.active = false;
  this.show_error = false;
  this.error_message = "";
  this.template = data.template || /\w*/;
}

