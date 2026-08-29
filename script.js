const QUESTIONS = [{"q": "النعت الحقيقي يتبع المنعوت في:", "opts": ["الإعراب فقط", "التعريف والتنكير فقط", "الإعراب والتعريف فقط", "الإعراب، والتعريف والتنكير، والتذكير والتأنيث، والإفراد والتثنية والجمع"], "a": 3}, {"q": "النعت السببي يتبع المنعوت في:", "opts": ["الإعراب والتعريف والتنكير", "العدد فقط", "التذكير والتأنيث فقط", "جميع ما سبق"], "a": 0}, {"q": "أي الجمل الآتية اشتملت على نعت سببي؟", "opts": ["جاء الطالبُ المجتهدُ", "مررتُ برجلٍ حسنٍ وجهُه", "هذا كتابٌ مفيدٌ", "حضر الباحثُ المتميزُ"], "a": 1}, {"q": "الجملة الواقعة نعتًا تأتي – في الأصل – بعد:", "opts": ["معرفة", "نكرة", "مضاف فقط", "علم"], "a": 1}, {"q": "في قولنا: \"يا أيها الرجلُ الكريمُ\" كلمة \"الكريم\" تعرب:", "opts": ["بدلًا", "نعتًا", "توكيدًا", "حالًا"], "a": 1}, {"q": "في قولنا: \"مررتُ بفتاةٍ حسنٍ خُلُقُها\" كلمة \"حسن\" تعرب:", "opts": ["نعتًا حقيقيًا", "نعتًا سببيًا", "بدلًا", "مفعولًا به"], "a": 1}, {"q": "أي العبارات الآتية وقع فيها النعت جامدًا مؤولًا بالمشتق؟", "opts": ["جاء رجلٌ طويلٌ", "رأيتُ رجلًا أسدًا", "حضر طالبٌ مجتهدٌ", "هذا كتابٌ نافعٌ"], "a": 1}, {"q": "في قولنا: \"جاء رجلٌ يضحكُ\" الجملة \"يضحك\" في محل:", "opts": ["خبر", "حال", "نعت", "مفعول به"], "a": 2}, {"q": "ينقسم التوكيد إلى:", "opts": ["لفظي ومعنوي", "حقيقي وسببي", "مطابق ومؤول", "كل من كل وبعض من كل"], "a": 0}, {"q": "أي الألفاظ الآتية ليس من ألفاظ التوكيد المعنوي؟", "opts": ["نفس", "عين", "جميع", "عند"], "a": 3}, {"q": "يكون التوكيد اللفظي بتكرار:", "opts": ["الاسم فقط", "الفعل فقط", "الحرف فقط", "الاسم أو الفعل أو الحرف أو الجملة"], "a": 3}, {"q": "في قولنا: \"جاء الطالبُ نفسُه\" نوع التوكيد:", "opts": ["لفظي", "معنوي", "بدلي", "سببي"], "a": 1}, {"q": "أي الجمل الآتية صحيحة في باب التوكيد؟", "opts": ["حضر الضيفان كلا", "حضر الضيفان كلاهما", "حضر الضيفان كل", "حضر الضيفان كلتاهما"], "a": 1}, {"q": "من شروط \"كلا/كلتا\" إذا استعملتا توكيدًا معنويًا:", "opts": ["أن تكونا نكرتين", "أن تتصلا بضمير يعود على المؤكَّد", "ألا تكونا مضافتين", "أن تستعملا مع المفرد"], "a": 1}, {"q": "في قولنا: \"نعم نعم أوافق\" تكون \"نعم\" الثانية:", "opts": ["حرف جواب مستقل", "توكيدًا لفظيًا", "بدلًا", "حالًا"], "a": 1}, {"q": "أي الجمل الآتية لا توكيد فيها؟", "opts": ["جاء المديرُ نفسُه", "فاز الطالبان كلاهما", "مررتُ بالقوم كلِّهم", "جاء أخوك زيدٌ"], "a": 3}, {"q": "البدل هو:", "opts": ["تابع غير مقصود بالحكم", "تابع مقصود بالحكم بلا واسطة", "اسم يبين هيئة ما قبله", "تابع لا يجوز الاستغناء به عن متبوعه"], "a": 1}, {"q": "في قولنا: \"زارني صديقُك خالدٌ\" إذا كان المقصود بالحكم هو خالد، فالنوع:", "opts": ["نعت", "توكيد", "بدل كل من كل", "بدل اشتمال"], "a": 2}, {"q": "في قولنا: \"أكلتُ الرغيفَ ثُلُثَه\" نوع البدل:", "opts": ["بدل كل من كل", "بدل بعض من كل", "بدل اشتمال", "بدل مباين"], "a": 1}, {"q": "في قولنا: \"أعجبني الكتابُ أسلوبُه\" نوع البدل:", "opts": ["بدل كل من كل", "بدل بعض من كل", "بدل اشتمال", "نعت"], "a": 2}, {"q": "يشترط في بدل البعض من الكل وبدل الاشتمال غالبًا:", "opts": ["التثنية", "التنكير", "اشتمالهما على ضمير يعود على المبدل منه", "أن يكونا معرفتين فقط"], "a": 2}, {"q": "أقسام بدل المباين هي:", "opts": ["المطابقة والتضمين", "الغلط والنسيان والإضراب", "التخصيص والتعميم", "البيان والتوكيد"], "a": 1}, {"q": "في قولنا: \"نفعني المعلمُ علمُه\" كلمة \"علمه\" تعرب:", "opts": ["نعتًا", "بدل اشتمال", "توكيدًا", "حالًا"], "a": 1}, {"q": "في قولنا: \"قرأتُ القصيدةَ نصفَها\" كلمة \"نصفها\" تعرب:", "opts": ["بدل كل من كل", "بدل بعض من كل", "توكيدًا معنويًا", "مفعولًا مطلقًا"], "a": 1}, {"q": "التابع الذي يتوسط بينه وبين متبوعه أحد حروف العطف يسمى:", "opts": ["نعتًا", "بدلًا", "عطف نسق", "عطف بيان"], "a": 2}, {"q": "من حروف العطف التي تفيد الترتيب مع التراخي:", "opts": ["الواو", "الفاء", "ثم", "أو"], "a": 2}, {"q": "من حروف العطف التي تفيد الترتيب مع التعقيب:", "opts": ["الفاء", "ثم", "بل", "أم"], "a": 0}, {"q": "الحرف الذي يفيد التخيير في الأصل هو:", "opts": ["الواو", "أو", "ثم", "بل"], "a": 1}, {"q": "في قولنا: \"نجح محمدٌ وعليٌّ\" كلمة \"علي\" تعرب:", "opts": ["بدلًا", "نعتًا", "معطوفًا", "توكيدًا"], "a": 2}, {"q": "عطف البيان هو:", "opts": ["تابع يتوسط بينه وبين متبوعه حرف عطف", "تابع جامد يُوضِّح متبوعه", "تابع يؤكد متبوعه لفظًا", "تابع يدل على جزء من متبوعه"], "a": 1}, {"q": "في قولهم: \"أقسم بالله أبو حفصٍ عمرُ\" كلمة \"عمر\" تعرب:", "opts": ["نعتًا", "عطف بيان", "توكيدًا", "حالًا"], "a": 1}, {"q": "أي الجمل الآتية ليس فيها عطف نسق؟", "opts": ["جاء زيدٌ وعمرو", "دخل الأستاذ ثم الطلاب", "ما سافر خالد بل أخوه", "جاء الطالبُ نفسُه"], "a": 3}, {"q": "النعت السببي يطابق المنعوت في التذكير والتأنيث كما يطابقه في الإعراب.", "opts": ["صواب", "خطأ"], "a": 1}, {"q": "التوكيد اللفظي قد يكون بتكرار الجملة كاملة.", "opts": ["صواب", "خطأ"], "a": 0}, {"q": "بدل الاشتمال لا يحتاج إلى ضمير يعود على المبدل منه.", "opts": ["صواب", "خطأ"], "a": 1}, {"q": "الواو من حروف عطف النسق.", "opts": ["صواب", "خطأ"], "a": 0}, {"q": "ثم تفيد الترتيب مع التعقيب.", "opts": ["صواب", "خطأ"], "a": 1}, {"q": "عطف البيان يكون – في الغالب – تابعًا جامدًا.", "opts": ["صواب", "خطأ"], "a": 0}, {"q": "يمكن أن يوافق المعطوفُ المعطوفَ عليه في الإعراب لاشتراكهما في العامل.", "opts": ["صواب", "خطأ"], "a": 0}, {"q": "عطف البيان من التوابع التي يكون بينها وبين متبوعها حرف عطف.", "opts": ["صواب", "خطأ"], "a": 1}];
const arabicIndex = ["أ","ب","ج","د"];
const arabicNum = ["١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩", "١٠", "١١", "١٢", "١٣", "١٤", "١٥", "١٦", "١٧", "١٨", "١٩", "٢٠", "٢١", "٢٢", "٢٣", "٢٤", "٢٥", "٢٦", "٢٧", "٢٨", "٢٩", "٣٠", "٣١", "٣٢", "٣٣", "٣٤", "٣٥", "٣٦", "٣٧", "٣٨", "٣٩", "٤٠"];

let student = {name:"", id:""};
let current = 0;
let answers = new Array(QUESTIONS.length).fill(null);
let locked = new Array(QUESTIONS.length).fill(false);

const screenStart = document.getElementById('screen-start');
const screenExam = document.getElementById('screen-exam');
const screenResult = document.getElementById('screen-result');

document.getElementById('start-btn').addEventListener('click', () => {
  const name = document.getElementById('stu-name').value.trim();
  const id = document.getElementById('stu-id').value.trim();
  const err = document.getElementById('login-err');
  if(!name || !id){
    err.style.display = 'block';
    return;
  }
  err.style.display = 'none';
  student.name = name; student.id = id;
  document.getElementById('chip-name').textContent = name;
  document.getElementById('chip-id').textContent = id;
  screenStart.classList.add('hidden');
  screenExam.classList.remove('hidden');
  renderQuestion();
  buildDots();
});

function buildDots(){
  const wrap = document.getElementById('dots');
  wrap.innerHTML = '';
  QUESTIONS.forEach((_, i) => {
    const d = document.createElement('div');
    d.className = 'dot';
    d.addEventListener('click', () => { current = i; renderQuestion(); });
    wrap.appendChild(d);
  });
  refreshDots();
}
function refreshDots(){
  const dots = document.querySelectorAll('.dot');
  dots.forEach((d,i) => {
    d.classList.toggle('answered', answers[i] !== null);
    d.classList.toggle('current', i === current);
  });
}

function renderQuestion(){
  const q = QUESTIONS[current];
  document.getElementById('q-eyebrow').textContent = 'السؤال ' + arabicNum[current];
  document.getElementById('q-text').textContent = q.q;
  document.getElementById('progress-label').textContent = (current+1) + ' / ' + QUESTIONS.length;
  document.getElementById('progress-fill').style.width = (((current+1)/QUESTIONS.length)*100) + '%';

  const optsWrap = document.getElementById('opts-wrap');
  optsWrap.innerHTML = '';
  q.opts.forEach((opt, i) => {
    const el = document.createElement('div');
    el.className = 'opt';
    el.innerHTML = '<span class="bullet">'+arabicIndex[i]+'</span><span>'+opt+'</span>';
    if(locked[current]){
      el.classList.add('locked');
      if(i === answers[current]) el.classList.add('selected');
    } else {
      if(i === answers[current]) el.classList.add('selected');
      el.addEventListener('click', () => selectAnswer(i));
    }
    optsWrap.appendChild(el);
  });

  document.getElementById('prev-btn').disabled = current === 0;
  document.getElementById('next-btn').textContent = current === QUESTIONS.length - 1 ? 'إنهاء الامتحان' : 'التالي';
  refreshDots();
}

function selectAnswer(i){
  answers[current] = i;
  locked[current] = true;
  renderQuestion();
}

document.getElementById('prev-btn').addEventListener('click', () => {
  if(current > 0){ current--; renderQuestion(); }
});
document.getElementById('next-btn').addEventListener('click', () => {
  if(current < QUESTIONS.length - 1){
    current++;
    renderQuestion();
  } else {
    showResults();
  }
});

function showResults(){
  screenExam.classList.add('hidden');
  screenResult.classList.remove('hidden');

  let score = 0;
  QUESTIONS.forEach((q,i) => { if(answers[i] === q.a) score++; });
  const pct = Math.round((score / QUESTIONS.length) * 100);

  document.getElementById('score-ring').style.setProperty('--pct', pct);
  document.getElementById('score-num').textContent = pct + '%';
  document.getElementById('score-sub').textContent = 'الطالب: ' + student.name + ' — الرقم الجامعي: ' + student.id;
  document.getElementById('score-msg').textContent = 'تم تسليم الامتحان بنجاح';
}
