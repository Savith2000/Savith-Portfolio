export const codeBlockText = `const student = {
  you: "Interested in Web Development",
  readyToLearn: true,
  wantToMakeASwitch: true,
  training: 0,
  webDevExperience: "minimal",

  joinTekjump: function () {
    if (this.readyToLearn && this.wantToMakeASwitch) {
        this.you = "Full Stack Developer";
        this.training += 9000;
        this.webDevExperience = 
          "Building live sites for real clients on 
           the Graduate Development Team";
    };
  }
};

student.joinTekjump();`

