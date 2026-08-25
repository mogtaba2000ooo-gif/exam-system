const QUESTIONS = [{"q": "في قولنا: «جاء الطالبُ المجتهدُ»، كلمة «المجتهد» هي:", "opts": ["بدل", "حال", "نعت", "توكيد"], "a": 2}, {"q": "أي الجمل الآتية اشتملت على نعت حقيقي؟", "opts": ["جاء رجلٌ حسنٌ خلقُه.", "رأيت طالبًا مجتهدًا.", "مررت برجلٍ كريمٍ أبوه.", "حضر محمدٌ وأخوه."], "a": 1}, {"q": "في قوله تعالى: ﴿وَإِنَّكَ لَعَلَىٰ خُلُقٍ عَظِيمٍ﴾، النعت هو:", "opts": ["إنَّ", "على", "خلق", "عظيم"], "a": 3}, {"q": "النعت في قولنا: «مررتُ بحديقةٍ جميلةٍ» وافق منعوته في:", "opts": ["التعريف فقط", "الجر فقط", "التأنيث والإفراد والتنكير والجر", "العدد فقط"], "a": 2}, {"q": "أي الجمل الآتية اشتملت على نعت سببي؟", "opts": ["جاء الطالبُ المجتهدُ.", "رأيتُ كتابًا مفيدًا.", "مررتُ برجلٍ حسنٍ خلقُه.", "حضر الطلابُ جميعًا."], "a": 2}, {"q": "في «مررتُ برجلٍ حسنٍ خلقُه»، كلمة «حسن» نعت لـ:", "opts": ["رجل", "خلقه", "الضمير", "لا شيء مما سبق"], "a": 0}, {"q": "في الجملة السابقة «حسنٍ خلقُه»، كلمة «خلقُه» تعرب:", "opts": ["فاعلًا للنعت السببي", "مفعولًا به", "بدلًا", "توكيدًا"], "a": 0}, {"q": "أي الجمل الآتية صحيحة من حيث المطابقة بين النعت والمنعوت؟", "opts": ["جاء الطالباتُ المجتهداتُ.", "جاء الطالباتُ المجتهدين.", "رأيتُ الطالبتانِ المجتهدتانِ.", "مررتُ بالطالبينِ المجتهدون."], "a": 0}, {"q": "في «رأيتُ طالبينِ مجتهدينِ»، علامة نصب النعت هي:", "opts": ["الفتحة", "الياء", "الألف", "الكسرة"], "a": 1}, {"q": "أيّ الآتي ليس من أوجه المطابقة بين النعت الحقيقي والمنعوت؟", "opts": ["الإعراب", "التعريف والتنكير", "التذكير والتأنيث", "الزمن"], "a": 3}, {"q": "في قوله تعالى: ﴿فِي عِيشَةٍ رَّاضِيَةٍ﴾، «راضية» تعرب:", "opts": ["حالًا", "نعتًا", "بدلًا", "مفعولًا به"], "a": 1}, {"q": "أيّ الجمل الآتية اشتملت على نعت جملة؟", "opts": ["جاء الطالبُ المجتهدُ.", "رأيتُ طالبًا يطلبُ العلمَ.", "مررتُ بطالبٍ مجتهدٍ.", "حضر الطالبُ نفسه."], "a": 1}, {"q": "في «رأيتُ طالبًا يطلبُ العلمَ»، جملة «يطلب العلم» هي:", "opts": ["جملة حالية", "جملة استئنافية", "جملة نعتية", "جملة اعتراضية"], "a": 2}, {"q": "أي الجمل الآتية اشتملت على نعت شبه جملة؟", "opts": ["جاء الطالبُ المجتهدُ.", "رأيتُ رجلًا في المسجدِ.", "حضر محمدٌ نفسه.", "جاء الطالبُ وأخوه."], "a": 1}, {"q": "في «رأيتُ رجلًا في المسجد»، شبه الجملة «في المسجد» تعرب:", "opts": ["حالًا", "نعتًا", "مفعولًا فيه", "بدلًا"], "a": 1}, {"q": "ما نوع النعت في: «جاء رجلٌ حسنٌ خلقُه»؟", "opts": ["نعت حقيقي", "نعت سببي", "نعت جملة", "نعت شبه جملة"], "a": 1}, {"q": "في «جاءت فتاةٌ حسنةُ الأخلاقِ»، النعت «حسنة» وافق المنعوت في:", "opts": ["الإعراب والتعريف فقط", "التذكير والتأنيث والإعراب", "التعريف والتنكير فقط", "العدد فقط"], "a": 1}, {"q": "أيّ الجمل الآتية اشتملت على نعت مفرد؟", "opts": ["جاء الطالبُ الذي نجح.", "رأيتُ رجلًا كريمًا.", "مررتُ برجلٍ في المسجد.", "جاء طالبٌ يطلب العلم."], "a": 1}, {"q": "في قولنا: «إنَّ الطالبَ المجتهدَ محبوبٌ»، علامة نصب «المجتهد» هي:", "opts": ["الفتحة", "الضمة", "الكسرة", "الياء"], "a": 0}, {"q": "أي الجمل الآتية اشتملت على نعت سببي منصوب؟", "opts": ["رأيتُ رجلًا حسنَ الخُلُقِ.", "رأيتُ رجلًا حسنًا خلقُه.", "رأيتُ رجلًا حسنُ الخُلُقِ.", "رأيتُ رجلًا حسنِ الخُلُقِ."], "a": 1}];
const arabicIndex = ["أ","ب","ج","د"];
const arabicNum = ["١","٢","٣","٤","٥","٦","٧","٨","٩","١٠","١١","١٢","١٣","١٤","١٥","١٦","١٧","١٨","١٩","٢٠"];

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
      if(i === q.a) el.classList.add('correct');
      if(i === answers[current] && answers[current] !== q.a) el.classList.add('wrong');
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
  document.getElementById('score-sub').textContent = 'أجبتَ بشكل صحيح عن ' + score + ' من ' + QUESTIONS.length + ' سؤالًا — الطالب: ' + student.name;

  let msg = '';
  if(pct >= 90) msg = 'ممتاز! إتقان واضح لباب النعت';
  else if(pct >= 70) msg = 'جيد جدًا، مع مراجعة بسيطة تتقن الباب كاملًا';
  else if(pct >= 50) msg = 'مقبول، يُنصح بمراجعة أنواع النعت وأحكام المطابقة';
  else msg = 'يُنصح بإعادة قراءة الدرس قبل إعادة المحاولة';
  document.getElementById('score-msg').textContent = msg;

  const list = document.getElementById('review-list');
  list.innerHTML = '';
  QUESTIONS.forEach((q,i) => {
    const isCorrect = answers[i] === q.a;
    const div = document.createElement('div');
    div.className = 'review-item';
    const userAnsText = answers[i] === null ? 'لم تتم الإجابة' : q.opts[answers[i]];
    div.innerHTML =
      '<div class="review-q">'+ arabicNum[i] +'. ' + q.q + '</div>' +
      '<div class="review-ans"><span class="tag '+(isCorrect?'good':'bad')+'">'+(isCorrect?'إجابتك صحيحة':'إجابتك خاطئة')+'</span><span>'+userAnsText+'</span></div>' +
      (isCorrect ? '' : '<div class="review-ans"><span class="tag good">الصحيحة</span><span>'+ q.opts[q.a] +'</span></div>');
    list.appendChild(div);
  });
}

document.getElementById('retry-btn').addEventListener('click', () => {
  current = 0;
  answers = new Array(QUESTIONS.length).fill(null);
  locked = new Array(QUESTIONS.length).fill(false);
  screenResult.classList.add('hidden');
  screenExam.classList.remove('hidden');
  renderQuestion();
});
