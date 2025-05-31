document.addEventListener("DOMContentLoaded", function() {
// About Me Section
// TODO: ここを編集してください
    document.querySelector(".about-me h1").innerHTML = "【氏名を入れて下さい】";
    document.querySelector(".about-me p").innerHTML = "【職業を入れて下さい】";
    document.querySelector(".about-me a").innerHTML = "【自己紹介文を入れて下さい】";


// DETAIL
// Contact Me Section
// TODO: ここを編集してください
    document.querySelector(".add").innerHTML = "【住所を入れて下さい】";
    document.querySelector(".tel").innerHTML = "tel: 【電話番号を入れて下さい】";
    document.querySelector(".email").innerHTML = "email: 【メールアドレスを入れて下さい】";


// Education Section
// TODO: ここを編集してください
    document.querySelector(".h-school").innerHTML = "【入学年-卒業年】";
    document.querySelector(".h-name").innerHTML = "【高校名】";
    document.querySelector(".uni").innerHTML = "【入学年-卒業年】";
    document.querySelector(".u-name").innerHTML = "【大学名】";

// Experience Section-1
// TODO: ここを編集してください
    document.querySelector(".experience-1").innerHTML = "【勤務期間】";
    document.querySelector(".task-1").innerHTML = "【仕事内容】";
    document.querySelector(".ability-1").innerHTML = "【担当業務のアピールポイント】";

// Experience Section-2
// TODO: ここを編集してください
    document.querySelector(".experience-2").innerHTML = "【勤務期間】";
    document.querySelector(".task-2").innerHTML = "【仕事内容】";
    document.querySelector(".ability-2").innerHTML = "【担当業務のアピールポイント】";

// Experience Section-3
// TODO: ここを編集してください
    document.querySelector(".experience-3").innerHTML = "【勤務期間】";
    document.querySelector(".task-3").innerHTML = "【仕事内容】";
    document.querySelector(".ability-3").innerHTML = "【担当業務のアピールポイント】";

});

// SKILLS
    document.addEventListener('DOMContentLoaded', () => {
        const skills = document.querySelectorAll('.skill');

        skills.forEach(skill => {
            const skillName = skill.getAttribute('data-skill');
            const skillLevel = skill.getAttribute('data-level');

            skill.innerHTML = `
                <div class="skill-name">${skillName}</div>
                <div class="skill-bar">
                    <div class="skill-level" style="width: ${skillLevel}%;"></div>
                </div>
            `;
        });
    });