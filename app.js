/* ============================================================================
   École Nouroul-Islam — Application unique (index.html + style.css + app.js)
   Toutes les données sont stockées dans le navigateur (localStorage).
   ============================================================================ */

/* ============================== 1. TRADUCTIONS ============================== */
const I18N = {
  fr: {
    dir:"ltr", school:"École Nouroul-Islam", schoolTag:"Amoutiévé • Excellence • Foi • Savoir",
    nav_dashboard:"Tableau de bord", nav_teachers:"Enseignants", nav_students:"Élèves",
    nav_accounting:"Comptabilité", nav_grades:"Saisie des notes", nav_bulletins:"Bulletins",
    nav_settings:"Paramètres", nav_section_manage:"Gestion", nav_section_pedago:"Pédagogie",
    logout:"Déconnexion", login_title:"Connexion administration", login_hint:"Réservé au personnel autorisé de l'école.",
    login_username:"Identifiant", login_password:"Mot de passe", login_btn:"Se connecter",
    login_error:"Mot de passe incorrect. Veuillez réessayer.", login_tagline:"Plateforme unifiée de gestion des enseignants, des élèves, de la comptabilité et des résultats scolaires du primaire au collège.",
    welcome:"Bienvenue", search:"Rechercher…", add:"Ajouter", edit:"Modifier", delete:"Supprimer", save:"Enregistrer",
    cancel:"Annuler", actions:"Actions", close:"Fermer", confirm_delete:"Confirmer la suppression de cet élément ?",
    yes:"Oui", no:"Non", print:"Imprimer", export:"Exporter CSV", all:"Tous", total:"Total",
    stud_name:"Nom & Prénom",
    dash_title:"Tableau de bord", dash_students:"Élèves inscrits", dash_teachers:"Enseignants",
    dash_collected:"Écolage encaissé", dash_pending:"Reste à payer", dash_balance:"Solde comptable",
    dash_avg:"Moyenne générale école", dash_recent_payments:"Derniers paiements", dash_low_balance:"Élèves avec un reste important",
    dash_classes_repartition:"Répartition des élèves par classe",
    teach_title:"Gestion des enseignants", teach_add:"Ajouter un enseignant", teach_name:"Nom & Prénom",
    teach_subject:"Matière(s)", teach_grade:"Grade", teach_salary:"Salaire (FCFA)", teach_phone:"Téléphone",
    teach_email:"Email", teach_hire:"Date d'embauche", teach_status:"Statut", teach_active:"Actif", teach_inactive:"Inactif",
    teach_level:"Niveau enseigné", teach_none:"Aucun enseignant enregistré pour le moment.",
    stud_title:"Gestion des élèves", stud_add:"Ajouter un élève", stud_class:"Classe",
    stud_level:"Niveau", stud_dob:"Date de naissance", stud_parent:"Parent / Tuteur", stud_phone:"Téléphone",
    stud_total:"Écolage total", stud_paid:"Déjà payé", stud_remain:"Reste à payer", stud_status:"Statut",
    stud_paid_full:"Soldé", stud_partial:"Partiel", stud_unpaid:"Impayé", stud_none:"Aucun élève enregistré pour le moment.",
    stud_add_payment:"Enregistrer un paiement", stud_payment_amount:"Montant versé", stud_payment_date:"Date",
    stud_payment_note:"Motif / remarque", stud_history:"Historique des paiements", primaire:"Primaire", college:"Collège",
    acc_title:"Comptabilité", acc_income:"Recettes", acc_expense:"Dépenses", acc_balance:"Solde",
    acc_add:"Nouvelle opération", acc_type:"Type", acc_amount:"Montant (FCFA)", acc_date:"Date",
    acc_category:"Catégorie", acc_desc:"Description", acc_none:"Aucune opération enregistrée.",
    cat_ecolage:"Écolage", cat_salaire:"Salaires", cat_fourniture:"Fournitures", cat_entretien:"Entretien",
    cat_transport:"Transport", cat_autre:"Autre",
    note_title:"Saisie des notes", note_class:"Classe", note_term:"Trimestre", note_subject:"Matière",
    note_student:"Élève", note_devoir1:"Devoir 1", note_devoir2:"Devoir 2", note_compo:"Composition",
    note_avg:"Moyenne", note_save:"Enregistrer les notes", note_coef:"Coef.", term1:"1er Trimestre",
    term2:"2e Trimestre", term3:"3e Trimestre", note_saved:"Notes enregistrées avec succès.",
    bull_title:"Bulletins scolaires", bull_select_student:"Choisir un élève", bull_select_term:"Trimestre",
    bull_generate:"Générer le bulletin", bull_of:"Bulletin de notes —", bull_general_avg:"Moyenne générale",
    bull_rank:"Rang", bull_appreciation:"Appréciation du conseil", bull_director:"Le Directeur",
    bull_parent_sign:"Signature du parent", bull_teacher_sign:"L'enseignant principal",
    app_excellent:"Excellent trimestre, continuez ainsi.", app_good:"Bon trimestre, des efforts encourageants.",
    app_average:"Trimestre moyen, des efforts sont attendus.", app_weak:"Trimestre faible, un travail sérieux est nécessaire.",
    set_title:"Paramètres", set_language:"Langue de l'interface", set_school_info:"Informations de l'école",
    set_security:"Sécurité", set_change_pass:"Changer le mot de passe", set_current_pass:"Mot de passe actuel",
    set_new_pass:"Nouveau mot de passe", set_confirm_pass:"Confirmer le nouveau mot de passe",
    set_data:"Données", set_backup:"Exporter une sauvegarde (JSON)", set_restore:"Importer une sauvegarde",
    set_reset:"Réinitialiser les données de démonstration", set_saved:"Paramètres enregistrés.",
    security_note:"⚠️ Mot de passe par défaut : Nour2026. Changez-le régulièrement. Cette vérification est côté navigateur ; pour un vrai déploiement public, ajoutez une authentification serveur.",
  },
  en: {
    dir:"ltr", school:"Nouroul-Islam School", schoolTag:"Amoutiévé • Excellence • Faith • Knowledge",
    nav_dashboard:"Dashboard", nav_teachers:"Teachers", nav_students:"Students",
    nav_accounting:"Accounting", nav_grades:"Grade entry", nav_bulletins:"Report cards",
    nav_settings:"Settings", nav_section_manage:"Management", nav_section_pedago:"Academics",
    logout:"Log out", login_title:"Administration login", login_hint:"Restricted to authorized school staff.",
    login_username:"Username", login_password:"Password", login_btn:"Sign in",
    login_error:"Incorrect password. Please try again.", login_tagline:"A unified platform to manage teachers, students, accounting, and academic results from primary to middle school.",
    welcome:"Welcome", search:"Search…", add:"Add", edit:"Edit", delete:"Delete", save:"Save",
    cancel:"Cancel", actions:"Actions", close:"Close", confirm_delete:"Confirm deletion of this item?",
    yes:"Yes", no:"No", print:"Print", export:"Export CSV", all:"All", total:"Total",
    stud_name:"Full name",
    dash_title:"Dashboard", dash_students:"Enrolled students", dash_teachers:"Teachers",
    dash_collected:"Fees collected", dash_pending:"Outstanding balance", dash_balance:"Accounting balance",
    dash_avg:"School overall average", dash_recent_payments:"Recent payments", dash_low_balance:"Students with a large balance due",
    dash_classes_repartition:"Students by class",
    teach_title:"Teacher management", teach_add:"Add a teacher", teach_name:"Full name",
    teach_subject:"Subject(s)", teach_grade:"Grade", teach_salary:"Salary (FCFA)", teach_phone:"Phone",
    teach_email:"Email", teach_hire:"Hire date", teach_status:"Status", teach_active:"Active", teach_inactive:"Inactive",
    teach_level:"Level taught", teach_none:"No teacher registered yet.",
    stud_title:"Student management", stud_add:"Add a student", stud_class:"Class",
    stud_level:"Level", stud_dob:"Date of birth", stud_parent:"Parent / Guardian", stud_phone:"Phone",
    stud_total:"Total fees", stud_paid:"Already paid", stud_remain:"Balance due", stud_status:"Status",
    stud_paid_full:"Fully paid", stud_partial:"Partial", stud_unpaid:"Unpaid", stud_none:"No student registered yet.",
    stud_add_payment:"Record a payment", stud_payment_amount:"Amount paid", stud_payment_date:"Date",
    stud_payment_note:"Note", stud_history:"Payment history", primaire:"Primary", college:"Middle school",
    acc_title:"Accounting", acc_income:"Income", acc_expense:"Expenses", acc_balance:"Balance",
    acc_add:"New transaction", acc_type:"Type", acc_amount:"Amount (FCFA)", acc_date:"Date",
    acc_category:"Category", acc_desc:"Description", acc_none:"No transaction recorded.",
    cat_ecolage:"Tuition", cat_salaire:"Salaries", cat_fourniture:"Supplies", cat_entretien:"Maintenance",
    cat_transport:"Transport", cat_autre:"Other",
    note_title:"Grade entry", note_class:"Class", note_term:"Term", note_subject:"Subject",
    note_student:"Student", note_devoir1:"Test 1", note_devoir2:"Test 2", note_compo:"Exam",
    note_avg:"Average", note_save:"Save grades", note_coef:"Coef.", term1:"Term 1",
    term2:"Term 2", term3:"Term 3", note_saved:"Grades saved successfully.",
    bull_title:"Report cards", bull_select_student:"Choose a student", bull_select_term:"Term",
    bull_generate:"Generate report card", bull_of:"Report card —", bull_general_avg:"Overall average",
    bull_rank:"Rank", bull_appreciation:"Board's remarks", bull_director:"The Principal",
    bull_parent_sign:"Parent's signature", bull_teacher_sign:"Head teacher",
    app_excellent:"Excellent term, keep it up.", app_good:"Good term, encouraging efforts.",
    app_average:"Average term, more effort is expected.", app_weak:"Weak term, serious work is required.",
    set_title:"Settings", set_language:"Interface language", set_school_info:"School information",
    set_security:"Security", set_change_pass:"Change password", set_current_pass:"Current password",
    set_new_pass:"New password", set_confirm_pass:"Confirm new password",
    set_data:"Data", set_backup:"Export backup (JSON)", set_restore:"Import backup",
    set_reset:"Reset to demo data", set_saved:"Settings saved.",
    security_note:"⚠️ Default password: Nour2026. Change it regularly. This check runs in the browser; for a real public deployment, add server-side authentication.",
  },
  ar: {
    dir:"rtl", school:"مدرسة نور الإسلام", schoolTag:"أموتيفي • التميّز • الإيمان • العلم",
    nav_dashboard:"لوحة القيادة", nav_teachers:"الأساتذة", nav_students:"التلاميذ",
    nav_accounting:"المحاسبة", nav_grades:"إدخال النقاط", nav_bulletins:"كشوف النقاط",
    nav_settings:"الإعدادات", nav_section_manage:"الإدارة", nav_section_pedago:"الشؤون التربوية",
    logout:"تسجيل الخروج", login_title:"تسجيل دخول الإدارة", login_hint:"مخصص لموظفي المدرسة المخوّلين فقط.",
    login_username:"اسم المستخدم", login_password:"كلمة المرور", login_btn:"دخول",
    login_error:"كلمة المرور غير صحيحة. حاول مرة أخرى.", login_tagline:"منصة موحّدة لإدارة الأساتذة والتلاميذ والمحاسبة والنتائج الدراسية من الابتدائي إلى الإعدادي.",
    welcome:"مرحبًا", search:"بحث…", add:"إضافة", edit:"تعديل", delete:"حذف", save:"حفظ",
    cancel:"إلغاء", actions:"إجراءات", close:"إغلاق", confirm_delete:"هل تؤكد حذف هذا العنصر؟",
    yes:"نعم", no:"لا", print:"طباعة", export:"تصدير CSV", all:"الكل", total:"المجموع",
    stud_name:"الاسم الكامل",
    dash_title:"لوحة القيادة", dash_students:"التلاميذ المسجلون", dash_teachers:"الأساتذة",
    dash_collected:"الرسوم المحصّلة", dash_pending:"المتبقي للدفع", dash_balance:"الرصيد المحاسبي",
    dash_avg:"المعدل العام للمدرسة", dash_recent_payments:"آخر الدفعات", dash_low_balance:"تلاميذ لديهم رصيد متبقٍّ كبير",
    dash_classes_repartition:"توزيع التلاميذ حسب الفصل",
    teach_title:"إدارة الأساتذة", teach_add:"إضافة أستاذ", teach_name:"الاسم الكامل",
    teach_subject:"المادة (المواد)", teach_grade:"الرتبة", teach_salary:"الراتب (فرنك)", teach_phone:"الهاتف",
    teach_email:"البريد الإلكتروني", teach_hire:"تاريخ التوظيف", teach_status:"الحالة", teach_active:"نشط", teach_inactive:"غير نشط",
    teach_level:"المستوى المُدرَّس", teach_none:"لا يوجد أساتذة مسجلون حتى الآن.",
    stud_title:"إدارة التلاميذ", stud_add:"إضافة تلميذ", stud_class:"الفصل",
    stud_level:"المستوى", stud_dob:"تاريخ الميلاد", stud_parent:"ولي الأمر", stud_phone:"الهاتف",
    stud_total:"الرسوم الإجمالية", stud_paid:"المدفوع", stud_remain:"المتبقي", stud_status:"الحالة",
    stud_paid_full:"مسدد بالكامل", stud_partial:"جزئي", stud_unpaid:"غير مدفوع", stud_none:"لا يوجد تلاميذ مسجلون حتى الآن.",
    stud_add_payment:"تسجيل دفعة", stud_payment_amount:"المبلغ المدفوع", stud_payment_date:"التاريخ",
    stud_payment_note:"ملاحظة", stud_history:"سجل الدفعات", primaire:"ابتدائي", college:"إعدادي",
    acc_title:"المحاسبة", acc_income:"الإيرادات", acc_expense:"المصروفات", acc_balance:"الرصيد",
    acc_add:"عملية جديدة", acc_type:"النوع", acc_amount:"المبلغ (فرنك)", acc_date:"التاريخ",
    acc_category:"الفئة", acc_desc:"الوصف", acc_none:"لا توجد عمليات مسجلة.",
    cat_ecolage:"الرسوم الدراسية", cat_salaire:"الرواتب", cat_fourniture:"اللوازم", cat_entretien:"الصيانة",
    cat_transport:"النقل", cat_autre:"أخرى",
    note_title:"إدخال النقاط", note_class:"الفصل", note_term:"الفصل الدراسي", note_subject:"المادة",
    note_student:"التلميذ", note_devoir1:"فرض 1", note_devoir2:"فرض 2", note_compo:"التركيب",
    note_avg:"المعدل", note_save:"حفظ النقاط", note_coef:"المعامل", term1:"الفصل الأول",
    term2:"الفصل الثاني", term3:"الفصل الثالث", note_saved:"تم حفظ النقاط بنجاح.",
    bull_title:"كشوف النقاط", bull_select_student:"اختر تلميذًا", bull_select_term:"الفصل الدراسي",
    bull_generate:"إنشاء كشف النقاط", bull_of:"كشف نقاط —", bull_general_avg:"المعدل العام",
    bull_rank:"الرتبة", bull_appreciation:"ملاحظة المجلس", bull_director:"المدير",
    bull_parent_sign:"توقيع ولي الأمر", bull_teacher_sign:"الأستاذ الرئيسي",
    app_excellent:"فصل دراسي ممتاز، واصل التقدّم.", app_good:"فصل دراسي جيد، جهود مشجعة.",
    app_average:"فصل دراسي متوسط، يُنتظر بذل مزيد من الجهد.", app_weak:"فصل دراسي ضعيف، يلزم عمل جدي.",
    set_title:"الإعدادات", set_language:"لغة الواجهة", set_school_info:"معلومات المدرسة",
    set_security:"الأمان", set_change_pass:"تغيير كلمة المرور", set_current_pass:"كلمة المرور الحالية",
    set_new_pass:"كلمة المرور الجديدة", set_confirm_pass:"تأكيد كلمة المرور الجديدة",
    set_data:"البيانات", set_backup:"تصدير نسخة احتياطية (JSON)", set_restore:"استيراد نسخة احتياطية",
    set_reset:"إعادة تعيين بيانات العرض التوضيحي", set_saved:"تم حفظ الإعدادات.",
    security_note:"⚠️ كلمة المرور الافتراضية: Nour2026. غيّرها بانتظام. هذا التحقق يتم داخل المتصفح؛ لأي نشر عمومي حقيقي أضف مصادقة من جانب الخادم.",
  }
};

function getLang(){ return localStorage.getItem('nis_lang') || 'fr'; }
function setLang(l){ localStorage.setItem('nis_lang', l); applyLang(); }
function t(key){ const d = I18N[getLang()] || I18N.fr; return d[key] !== undefined ? d[key] : (I18N.fr[key] || key); }

function applyLang(){
  const lang = getLang();
  const dict = I18N[lang];
  document.documentElement.lang = lang;
  document.documentElement.dir = dict.dir;
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const key = el.getAttribute('data-i18n');
    if(dict[key] !== undefined) el.textContent = dict[key];
  });
  document.querySelectorAll('[data-i18n-ph]').forEach(el=>{
    const key = el.getAttribute('data-i18n-ph');
    if(dict[key] !== undefined) el.setAttribute('placeholder', dict[key]);
  });
  document.querySelectorAll('.lang-switch button, .lang-pill').forEach(b=>{
    b.classList.toggle('active', b.dataset.lang === lang);
  });
  renderCurrentView();
}

/* ============================== 2. DONNÉES ============================== */
const DB_KEYS = {
  teachers:'nis_teachers', students:'nis_students', transactions:'nis_transactions',
  grades:'nis_grades', classes:'nis_classes', settings:'nis_settings'
};

const CLASSES = [
  {id:'cp1', nom:'CP1', niveau:'primaire'}, {id:'cp2', nom:'CP2', niveau:'primaire'},
  {id:'ce1', nom:'CE1', niveau:'primaire'}, {id:'ce2', nom:'CE2', niveau:'primaire'},
  {id:'cm1', nom:'CM1', niveau:'primaire'}, {id:'cm2', nom:'CM2', niveau:'primaire'},
  {id:'6e', nom:'6ème', niveau:'college'}, {id:'5e', nom:'5ème', niveau:'college'},
  {id:'4e', nom:'4ème', niveau:'college'}, {id:'3e', nom:'3ème', niveau:'college'},
];

const MATIERES = {
  primaire: [
    {id:'fr', nom:'Français', coef:3}, {id:'math', nom:'Mathématiques', coef:3},
    {id:'eveil', nom:'Éveil Scientifique', coef:2}, {id:'islam', nom:'Instruction Islamique', coef:2},
    {id:'arabe', nom:'Arabe', coef:2}, {id:'anglais', nom:'Anglais', coef:1},
  ],
  college: [
    {id:'fr', nom:'Français', coef:3}, {id:'math', nom:'Mathématiques', coef:4},
    {id:'svt', nom:'SVT', coef:2}, {id:'pc', nom:'Physique-Chimie', coef:2},
    {id:'hg', nom:'Histoire-Géographie', coef:2}, {id:'anglais', nom:'Anglais', coef:2},
    {id:'arabe', nom:'Arabe', coef:2}, {id:'islam', nom:'Éducation Islamique', coef:2},
    {id:'eps', nom:'EPS', coef:1},
  ]
};

function uid(prefix){ return prefix + '_' + Date.now().toString(36) + Math.random().toString(36).slice(2,7); }
function fmtMoney(n){ return (Number(n)||0).toLocaleString('fr-FR') + ' FCFA'; }
function readDB(key, fallback){ try{ const raw = localStorage.getItem(key); return raw ? JSON.parse(raw) : fallback; } catch(e){ return fallback; } }
function writeDB(key, value){ localStorage.setItem(key, JSON.stringify(value)); }

function seedIfEmpty(){
  if(!localStorage.getItem(DB_KEYS.teachers)){
    writeDB(DB_KEYS.teachers, [
      {id:uid('t'), nom:'Diallo', prenom:'Fatima', matieres:['fr','islam'], grade:'Professeur certifié', salaire:180000, telephone:'90 11 22 33', email:'f.diallo@nis.edu', dateEmbauche:'2021-09-01', niveau:'primaire', statut:'actif'},
      {id:uid('t'), nom:'Amadou', prenom:'Ibrahim', matieres:['math'], grade:'Professeur principal', salaire:210000, telephone:'91 22 33 44', email:'i.amadou@nis.edu', dateEmbauche:'2019-09-01', niveau:'college', statut:'actif'},
      {id:uid('t'), nom:'Traoré', prenom:'Aïcha', matieres:['arabe','islam'], grade:'Professeur', salaire:170000, telephone:'92 33 44 55', email:'a.traore@nis.edu', dateEmbauche:'2022-01-10', niveau:'primaire', statut:'actif'},
      {id:uid('t'), nom:'Bello', prenom:'Moussa', matieres:['svt','pc'], grade:'Professeur certifié', salaire:200000, telephone:'93 44 55 66', email:'m.bello@nis.edu', dateEmbauche:'2020-09-01', niveau:'college', statut:'actif'},
    ]);
  }
  if(!localStorage.getItem(DB_KEYS.students)){
    const mk = (nom, prenom, classeId, niveau, total, paye, parent, tel) => ({
      id:uid('s'), nom, prenom, classe:classeId, niveau, dateNaissance:'2014-05-12',
      parent, telephone:tel, ecolageTotal:total, paiements: paye>0 ? [{id:uid('p'), montant:paye, date:'2026-08-05', note:'Versement 1'}] : []
    });
    writeDB(DB_KEYS.students, [
      mk('Konaté','Awa','cp1','primaire',150000,150000,'M. Konaté Seydou','90 12 34 56'),
      mk('Ouédraogo','Yacouba','ce2','primaire',150000,80000,'Mme Ouédraogo','91 23 45 67'),
      mk('Sanogo','Mariam','cm2','primaire',160000,60000,'M. Sanogo Ali','92 34 56 78'),
      mk('Cissé','Abdoulaye','6e','college',200000,200000,'M. Cissé Boubacar','93 45 67 89'),
      mk('Barry','Khadija','5e','college',200000,100000,'Mme Barry','94 56 78 90'),
      mk('Koné','Ismaël','3e','college',220000,0,'M. Koné Adama','95 67 89 01'),
    ]);
  }
  if(!localStorage.getItem(DB_KEYS.transactions)){
    writeDB(DB_KEYS.transactions, [
      {id:uid('tx'), type:'recette', categorie:'ecolage', montant:150000, date:'2026-08-05', description:'Écolage — Konaté Awa'},
      {id:uid('tx'), type:'depense', categorie:'salaire', montant:180000, date:'2026-08-01', description:'Salaire — Fatima Diallo'},
      {id:uid('tx'), type:'depense', categorie:'fourniture', montant:35000, date:'2026-08-03', description:'Achat de craies et cahiers'},
      {id:uid('tx'), type:'recette', categorie:'ecolage', montant:200000, date:'2026-08-06', description:'Écolage — Cissé Abdoulaye'},
    ]);
  }
  if(!localStorage.getItem(DB_KEYS.grades)) writeDB(DB_KEYS.grades, {});
  if(!localStorage.getItem(DB_KEYS.settings)) writeDB(DB_KEYS.settings, {schoolName:'École Nouroul-Islam', address:'', phone:''});
}

const Data = {
  teachers(){ return readDB(DB_KEYS.teachers, []); },
  saveTeachers(list){ writeDB(DB_KEYS.teachers, list); },
  students(){ return readDB(DB_KEYS.students, []); },
  saveStudents(list){ writeDB(DB_KEYS.students, list); },
  transactions(){ return readDB(DB_KEYS.transactions, []); },
  saveTransactions(list){ writeDB(DB_KEYS.transactions, list); },
  grades(){ return readDB(DB_KEYS.grades, {}); },
  saveGrades(obj){ writeDB(DB_KEYS.grades, obj); },
  settings(){ return readDB(DB_KEYS.settings, {}); },
  saveSettings(obj){ writeDB(DB_KEYS.settings, obj); },
  studentTotalPaid(s){ return (s.paiements||[]).reduce((a,p)=>a+Number(p.montant||0),0); },
  studentRemaining(s){ return Math.max(0, Number(s.ecolageTotal||0) - Data.studentTotalPaid(s)); },
  className(id){ const c = CLASSES.find(c=>c.id===id); return c ? c.nom : id; },
  studentAverage(studentId, classId, term){
    const grades = Data.grades();
    const level = CLASSES.find(c=>c.id===classId)?.niveau || 'primaire';
    const matieres = MATIERES[level];
    let sumPts=0, sumCoef=0;
    matieres.forEach(m=>{
      const key = `${classId}__${term}__${m.id}__${studentId}`;
      const g = grades[key];
      if(g && (g.d1!==undefined || g.d2!==undefined || g.compo!==undefined)){
        const d1=Number(g.d1)||0, d2=Number(g.d2)||0, compo=Number(g.compo)||0;
        const moy = (d1 + d2 + (compo*2)) / 4;
        sumPts += moy*m.coef; sumCoef += m.coef;
      }
    });
    return sumCoef ? (sumPts/sumCoef) : null;
  }
};

/* ============================== 3. AUTHENTIFICATION ============================== */
/* NOTE : vérification côté navigateur uniquement (voir README pour la mise en garde) */
const AUTH_SESSION_KEY = 'nis_session';
const PW_HASH_KEY = 'nis_pw_hash';

async function sha256(text){
  const enc = new TextEncoder().encode(text);
  const buf = await crypto.subtle.digest('SHA-256', enc);
  return Array.from(new Uint8Array(buf)).map(b=>b.toString(16).padStart(2,'0')).join('');
}
async function ensurePasswordInitialized(){
  if(!localStorage.getItem(PW_HASH_KEY)) localStorage.setItem(PW_HASH_KEY, await sha256('Nour2026'));
}
async function tryLogin(password){
  await ensurePasswordInitialized();
  const hash = await sha256(password || '');
  if(hash === localStorage.getItem(PW_HASH_KEY)){
    sessionStorage.setItem(AUTH_SESSION_KEY, JSON.stringify({ts:Date.now()}));
    return true;
  }
  return false;
}
async function changePassword(current, next){
  await ensurePasswordInitialized();
  const curHash = await sha256(current || '');
  if(curHash !== localStorage.getItem(PW_HASH_KEY)) return {ok:false};
  localStorage.setItem(PW_HASH_KEY, await sha256(next));
  return {ok:true};
}
function isAuthenticated(){ return !!sessionStorage.getItem(AUTH_SESSION_KEY); }
function logout(){ sessionStorage.removeItem(AUTH_SESSION_KEY); showLogin(); }

/* ============================== 4. NAVIGATION (SPA) ============================== */
let currentView = 'dashboard';
let currentClassFilterStudents = 'all';
let currentTypeFilterTx = 'all';
let currentGradeSubject = null;

function showLogin(){
  document.getElementById('loginView').classList.add('active');
  document.getElementById('appShell').classList.remove('active');
}
function showApp(){
  document.getElementById('loginView').classList.remove('active');
  document.getElementById('appShell').classList.add('active');
  navigate('dashboard');
}

function navigate(view){
  currentView = view;
  document.querySelectorAll('#appShell .view').forEach(v=>v.classList.remove('active'));
  document.getElementById('view-'+view).classList.add('active');
  document.querySelectorAll('.sidebar-nav a').forEach(a=>a.classList.toggle('active', a.dataset.page===view));
  const titleEl = document.getElementById('topbarTitle');
  const navMap = {dashboard:'nav_dashboard', enseignants:'nav_teachers', eleves:'nav_students',
    comptabilite:'nav_accounting', notes:'nav_grades', bulletins:'nav_bulletins', parametres:'nav_settings'};
  titleEl.setAttribute('data-i18n', navMap[view]);
  applyLang();
  renderCurrentView();
}

function renderCurrentView(){
  if(!isAuthenticated()) return;
  switch(currentView){
    case 'dashboard': renderDashboard(); break;
    case 'enseignants': populateMatieresSelect(); renderTeachers(); break;
    case 'eleves': populateClassSelects(); renderClassFilter(); renderStudents(); break;
    case 'comptabilite': renderTx(); break;
    case 'notes': populateNoteClassSelect(); renderSubjectPills(); renderGrades(); break;
    case 'bulletins': populateBulletinClassSelect(); populateBulletinStudentSelect(); break;
    case 'parametres': loadSchoolInfo(); break;
  }
}

/* ============================== 5. TOAST / MODAL ============================== */
let toastTimer;
function showToast(message, type){
  let el = document.getElementById('toast');
  if(!el){ el = document.createElement('div'); el.id='toast'; el.className='toast'; document.body.appendChild(el); }
  el.textContent = message;
  el.className = 'toast show' + (type ? ' '+type : '');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(()=>el.classList.remove('show'), 2600);
}
function openModal(id){ document.getElementById(id).classList.add('open'); }
function closeModal(id){ document.getElementById(id).classList.remove('open'); }
function confirmAction(msgKey, onYes){ if(confirm(t(msgKey))) onYes(); }

/* ============================== 6. TABLEAU DE BORD ============================== */
function renderDashboard(){
  const students = Data.students(), teachers = Data.teachers(), tx = Data.transactions();
  document.getElementById('statStudents').textContent = students.length;
  document.getElementById('statTeachers').textContent = teachers.length;

  const collected = students.reduce((a,s)=>a+Data.studentTotalPaid(s),0);
  const pending = students.reduce((a,s)=>a+Data.studentRemaining(s),0);
  document.getElementById('statCollected').textContent = fmtMoney(collected);
  document.getElementById('statPending').textContent = fmtMoney(pending);

  const income = tx.filter(x=>x.type==='recette').reduce((a,x)=>a+Number(x.montant),0);
  const expense = tx.filter(x=>x.type==='depense').reduce((a,x)=>a+Number(x.montant),0);
  document.getElementById('statBalance').textContent = fmtMoney(income-expense);

  let sum=0,count=0;
  students.forEach(s=>{ const avg=Data.studentAverage(s.id,s.classe,'term1'); if(avg!==null){sum+=avg;count++;} });
  document.getElementById('statAvg').textContent = count ? (sum/count).toFixed(2)+'/20' : '—';

  const chart = document.getElementById('classChart');
  chart.innerHTML = '';
  const max = Math.max(1, ...CLASSES.map(c=>students.filter(s=>s.classe===c.id).length));
  CLASSES.forEach(c=>{
    const n = students.filter(s=>s.classe===c.id).length;
    const h = 14 + (n/max)*110;
    const bar = document.createElement('div');
    bar.style.cssText = 'display:flex;flex-direction:column;align-items:center;gap:6px;flex:1;min-width:44px;';
    bar.innerHTML = `<div style="font-size:12px;font-weight:700;color:var(--primary-dark)">${n}</div>
      <div style="width:100%;max-width:34px;height:${h}px;background:${c.niveau==='primaire'?'var(--primary)':'var(--gold)'};border-radius:6px 6px 0 0;"></div>
      <div style="font-size:11px;color:var(--teal-muted);">${c.nom}</div>`;
    chart.appendChild(bar);
  });

  const allPayments = [];
  students.forEach(s=>(s.paiements||[]).forEach(p=>allPayments.push({...p, student:s})));
  allPayments.sort((a,b)=> new Date(b.date) - new Date(a.date));
  document.querySelector('#recentPaymentsTable tbody').innerHTML = allPayments.slice(0,6).map(p=>`
    <tr><td>${p.student.prenom} ${p.student.nom}</td><td>${Data.className(p.student.classe)}</td>
    <td class="num">${fmtMoney(p.montant)}</td><td>${p.date}</td></tr>`).join('') || `<tr><td colspan="4" class="empty-state">—</td></tr>`;

  const lb = students.map(s=>({s, remain:Data.studentRemaining(s)})).filter(x=>x.remain>0).sort((a,b)=>b.remain-a.remain).slice(0,6);
  document.querySelector('#lowBalanceTable tbody').innerHTML = lb.map(x=>`
    <tr><td>${x.s.prenom} ${x.s.nom}</td><td>${Data.className(x.s.classe)}</td>
    <td class="num">${fmtMoney(x.s.ecolageTotal)}</td>
    <td class="num" style="color:var(--danger)">${fmtMoney(x.remain)}</td>
    <td><a href="#" onclick="navigate('eleves');return false;">→</a></td></tr>`).join('')
    || `<tr><td colspan="5" class="empty-state" data-i18n="stud_none"></td></tr>`;
}

/* ============================== 7. ENSEIGNANTS ============================== */
function subjectLabel(id){ const m=[...MATIERES.primaire,...MATIERES.college].find(m=>m.id===id); return m?m.nom:id; }

function populateMatieresSelect(){
  const sel = document.getElementById('t_matieres');
  const all = {}; [...MATIERES.primaire, ...MATIERES.college].forEach(m=>all[m.id]=m.nom);
  const prevSelected = new Set([...sel.selectedOptions].map(o=>o.value));
  sel.innerHTML = Object.entries(all).map(([id,nom])=>`<option value="${id}" ${prevSelected.has(id)?'selected':''}>${nom}</option>`).join('');
}

function renderTeachers(){
  const q = (document.getElementById('teacherSearchBox').value || '').toLowerCase();
  const list = Data.teachers().filter(x => (x.nom+' '+x.prenom).toLowerCase().includes(q));
  const tbody = document.getElementById('teacherTbody');
  if(!list.length){ tbody.innerHTML = `<tr><td colspan="8" class="empty-state" data-i18n="teach_none"></td></tr>`; applyLangSilent(); return; }
  tbody.innerHTML = list.map(x=>`
    <tr>
      <td><b>${x.prenom} ${x.nom}</b></td>
      <td>${(x.matieres||[]).map(subjectLabel).join(', ')}</td>
      <td>${x.grade||''}</td><td>${t(x.niveau)}</td>
      <td class="num">${fmtMoney(x.salaire)}</td><td>${x.telephone||''}</td>
      <td>${x.statut==='actif' ? `<span class="badge badge-success">${t('teach_active')}</span>` : `<span class="badge badge-neutral">${t('teach_inactive')}</span>`}</td>
      <td>
        <button class="btn btn-outline btn-sm" onclick="editTeacher('${x.id}')" data-i18n="edit"></button>
        <button class="btn btn-danger btn-sm" onclick="deleteTeacher('${x.id}')" data-i18n="delete"></button>
      </td>
    </tr>`).join('');
  applyLangSilent();
}
function applyLangSilent(){
  const dict = I18N[getLang()];
  document.querySelectorAll('[data-i18n]').forEach(el=>{ const k=el.getAttribute('data-i18n'); if(dict[k]!==undefined) el.textContent=dict[k]; });
}

function openTeacherModal(){
  document.getElementById('t_id').value = '';
  ['t_prenom','t_nom','t_grade','t_salaire','t_telephone','t_email','t_dateEmbauche'].forEach(id=>document.getElementById(id).value='');
  document.getElementById('t_niveau').value = 'primaire';
  document.getElementById('t_statut').value = 'actif';
  [...document.getElementById('t_matieres').options].forEach(o=>o.selected=false);
  document.getElementById('teacherModalTitle').setAttribute('data-i18n','teach_add');
  applyLangSilent();
  openModal('teacherModal');
}
function editTeacher(id){
  const x = Data.teachers().find(x=>x.id===id); if(!x) return;
  document.getElementById('t_id').value = x.id;
  document.getElementById('t_prenom').value = x.prenom;
  document.getElementById('t_nom').value = x.nom;
  document.getElementById('t_grade').value = x.grade||'';
  document.getElementById('t_salaire').value = x.salaire||0;
  document.getElementById('t_telephone').value = x.telephone||'';
  document.getElementById('t_email').value = x.email||'';
  document.getElementById('t_dateEmbauche').value = x.dateEmbauche||'';
  document.getElementById('t_niveau').value = x.niveau||'primaire';
  document.getElementById('t_statut').value = x.statut||'actif';
  [...document.getElementById('t_matieres').options].forEach(o=>o.selected=(x.matieres||[]).includes(o.value));
  document.getElementById('teacherModalTitle').setAttribute('data-i18n','edit');
  applyLangSilent();
  openModal('teacherModal');
}
function saveTeacher(){
  const id = document.getElementById('t_id').value;
  const list = Data.teachers();
  const matieres = [...document.getElementById('t_matieres').selectedOptions].map(o=>o.value);
  const obj = {
    id: id || uid('t'),
    prenom: document.getElementById('t_prenom').value.trim(),
    nom: document.getElementById('t_nom').value.trim(),
    matieres, grade: document.getElementById('t_grade').value.trim(),
    salaire: Number(document.getElementById('t_salaire').value)||0,
    telephone: document.getElementById('t_telephone').value.trim(),
    email: document.getElementById('t_email').value.trim(),
    dateEmbauche: document.getElementById('t_dateEmbauche').value,
    niveau: document.getElementById('t_niveau').value,
    statut: document.getElementById('t_statut').value,
  };
  if(!obj.nom || !obj.prenom){ showToast(t('stud_name'), 'danger'); return; }
  const idx = list.findIndex(x=>x.id===id);
  if(idx>=0) list[idx]=obj; else list.push(obj);
  Data.saveTeachers(list);
  closeModal('teacherModal'); renderTeachers();
  showToast('✓ ' + t('save'), 'success');
}
function deleteTeacher(id){
  confirmAction('confirm_delete', ()=>{
    Data.saveTeachers(Data.teachers().filter(x=>x.id!==id));
    renderTeachers(); showToast('✓ ' + t('delete'), 'success');
  });
}

/* ============================== 8. ÉLÈVES ============================== */
function populateClassSelects(){
  document.getElementById('s_classe').innerHTML = CLASSES.map(c=>`<option value="${c.id}">${c.nom} (${t(c.niveau)})</option>`).join('');
}
function renderClassFilter(){
  const el = document.getElementById('classFilter');
  let html = `<button class="${currentClassFilterStudents==='all'?'active':''}" onclick="setClassFilter('all')" data-i18n="all"></button>`;
  CLASSES.forEach(c=>{ html += `<button class="${currentClassFilterStudents===c.id?'active':''}" onclick="setClassFilter('${c.id}')">${c.nom}</button>`; });
  el.innerHTML = html;
  applyLangSilent();
}
function setClassFilter(id){ currentClassFilterStudents = id; renderClassFilter(); renderStudents(); }

function statusBadge(s){
  const remain = Data.studentRemaining(s);
  if(remain<=0) return `<span class="badge badge-success">${t('stud_paid_full')}</span>`;
  if(Data.studentTotalPaid(s)>0) return `<span class="badge badge-gold">${t('stud_partial')}</span>`;
  return `<span class="badge badge-danger">${t('stud_unpaid')}</span>`;
}

function renderStudents(){
  const q = (document.getElementById('studentSearchBox').value || '').toLowerCase();
  let list = Data.students().filter(x => (x.nom+' '+x.prenom).toLowerCase().includes(q));
  if(currentClassFilterStudents !== 'all') list = list.filter(x=>x.classe===currentClassFilterStudents);
  const tbody = document.getElementById('studentTbody');
  if(!list.length){ tbody.innerHTML = `<tr><td colspan="7" class="empty-state" data-i18n="stud_none"></td></tr>`; applyLangSilent(); return; }
  tbody.innerHTML = list.map(x=>{
    const paid = Data.studentTotalPaid(x), remain = Data.studentRemaining(x);
    return `<tr>
      <td><b>${x.prenom} ${x.nom}</b></td><td>${Data.className(x.classe)}</td>
      <td class="num">${fmtMoney(x.ecolageTotal)}</td>
      <td class="num" style="color:var(--success)">${fmtMoney(paid)}</td>
      <td class="num" style="color:${remain>0?'var(--danger)':'var(--success)'}">${fmtMoney(remain)}</td>
      <td>${statusBadge(x)}</td>
      <td style="white-space:nowrap;">
        <button class="btn btn-gold btn-sm" onclick="openPaymentModal('${x.id}')" data-i18n="stud_add_payment"></button>
        <button class="btn btn-outline btn-sm" onclick="editStudent('${x.id}')" data-i18n="edit"></button>
        <button class="btn btn-danger btn-sm" onclick="deleteStudent('${x.id}')" data-i18n="delete"></button>
      </td>
    </tr>`;
  }).join('');
  applyLangSilent();
}

function openStudentModal(){
  document.getElementById('s_id').value = '';
  ['s_prenom','s_nom','s_dob','s_parent','s_phone','s_total'].forEach(id=>document.getElementById(id).value='');
  document.getElementById('studentModalTitle').setAttribute('data-i18n','stud_add');
  applyLangSilent();
  openModal('studentModal');
}
function editStudent(id){
  const x = Data.students().find(x=>x.id===id); if(!x) return;
  document.getElementById('s_id').value = x.id;
  document.getElementById('s_prenom').value = x.prenom;
  document.getElementById('s_nom').value = x.nom;
  document.getElementById('s_classe').value = x.classe;
  document.getElementById('s_dob').value = x.dateNaissance||'';
  document.getElementById('s_parent').value = x.parent||'';
  document.getElementById('s_phone').value = x.telephone||'';
  document.getElementById('s_total').value = x.ecolageTotal||0;
  document.getElementById('studentModalTitle').setAttribute('data-i18n','edit');
  applyLangSilent();
  openModal('studentModal');
}
function saveStudent(){
  const id = document.getElementById('s_id').value;
  const list = Data.students();
  const idx = list.findIndex(x=>x.id===id);
  const obj = {
    id: id || uid('s'),
    prenom: document.getElementById('s_prenom').value.trim(),
    nom: document.getElementById('s_nom').value.trim(),
    classe: document.getElementById('s_classe').value,
    niveau: CLASSES.find(c=>c.id===document.getElementById('s_classe').value)?.niveau || 'primaire',
    dateNaissance: document.getElementById('s_dob').value,
    parent: document.getElementById('s_parent').value.trim(),
    telephone: document.getElementById('s_phone').value.trim(),
    ecolageTotal: Number(document.getElementById('s_total').value)||0,
    paiements: idx>=0 ? list[idx].paiements : [],
  };
  if(!obj.nom || !obj.prenom){ showToast(t('stud_name'), 'danger'); return; }
  if(idx>=0) list[idx]=obj; else list.push(obj);
  Data.saveStudents(list);
  closeModal('studentModal'); renderStudents();
  showToast('✓ ' + t('save'), 'success');
}
function deleteStudent(id){
  confirmAction('confirm_delete', ()=>{
    Data.saveStudents(Data.students().filter(x=>x.id!==id));
    renderStudents(); showToast('✓ ' + t('delete'), 'success');
  });
}
function openPaymentModal(studentId){
  document.getElementById('p_student_id').value = studentId;
  document.getElementById('p_amount').value = '';
  document.getElementById('p_note').value = '';
  document.getElementById('p_date').value = new Date().toISOString().slice(0,10);
  renderPaymentHistory(studentId);
  openModal('paymentModal');
}
function renderPaymentHistory(studentId){
  const s = Data.students().find(x=>x.id===studentId);
  const payments = (s.paiements||[]).slice().sort((a,b)=>new Date(b.date)-new Date(a.date));
  document.querySelector('#paymentHistoryTable tbody').innerHTML = payments.map(p=>
    `<tr><td>${p.date}</td><td class="num">${fmtMoney(p.montant)}</td><td>${p.note||''}</td></tr>`).join('')
    || `<tr><td colspan="3" class="empty-state">—</td></tr>`;
}
function addPayment(){
  const studentId = document.getElementById('p_student_id').value;
  const amount = Number(document.getElementById('p_amount').value);
  const date = document.getElementById('p_date').value;
  const note = document.getElementById('p_note').value.trim();
  if(!amount || amount<=0) return;
  const list = Data.students();
  const s = list.find(x=>x.id===studentId);
  s.paiements = s.paiements || [];
  s.paiements.push({id:uid('p'), montant:amount, date, note});
  Data.saveStudents(list);
  const tx = Data.transactions();
  tx.push({id:uid('tx'), type:'recette', categorie:'ecolage', montant:amount, date, description:`Écolage — ${s.prenom} ${s.nom}`});
  Data.saveTransactions(tx);
  document.getElementById('p_amount').value = '';
  document.getElementById('p_note').value = '';
  renderPaymentHistory(studentId); renderStudents();
  showToast('✓ ' + t('save'), 'success');
}

/* ============================== 9. COMPTABILITÉ ============================== */
function catLabel(c){ return t('cat_'+c); }
function setTypeFilter(type){
  currentTypeFilterTx = type;
  document.querySelectorAll('#typeFilter button').forEach(b=>b.classList.toggle('active', b.dataset.t===type));
  renderTx();
}
function renderTx(){
  const tx = Data.transactions();
  const income = tx.filter(x=>x.type==='recette').reduce((a,x)=>a+Number(x.montant),0);
  const expense = tx.filter(x=>x.type==='depense').reduce((a,x)=>a+Number(x.montant),0);
  document.getElementById('sumIncome').textContent = fmtMoney(income);
  document.getElementById('sumExpense').textContent = fmtMoney(expense);
  document.getElementById('sumBalance').textContent = fmtMoney(income-expense);

  let list = tx.slice().sort((a,b)=>new Date(b.date)-new Date(a.date));
  if(currentTypeFilterTx!=='all') list = list.filter(x=>x.type===currentTypeFilterTx);
  const tbody = document.getElementById('txTbody');
  if(!list.length){ tbody.innerHTML = `<tr><td colspan="6" class="empty-state" data-i18n="acc_none"></td></tr>`; applyLangSilent(); return; }
  tbody.innerHTML = list.map(x=>`
    <tr>
      <td>${x.date}</td>
      <td>${x.type==='recette' ? `<span class="badge badge-success">${t('acc_income')}</span>` : `<span class="badge badge-danger">${t('acc_expense')}</span>`}</td>
      <td>${catLabel(x.categorie)}</td><td>${x.description||''}</td>
      <td class="num" style="color:${x.type==='recette'?'var(--success)':'var(--danger)'}">${x.type==='recette'?'+':'-'} ${fmtMoney(x.montant)}</td>
      <td>
        <button class="btn btn-outline btn-sm" onclick="editTx('${x.id}')" data-i18n="edit"></button>
        <button class="btn btn-danger btn-sm" onclick="deleteTx('${x.id}')" data-i18n="delete"></button>
      </td>
    </tr>`).join('');
  applyLangSilent();
}
function openTxModal(){
  document.getElementById('tx_id').value = '';
  document.getElementById('tx_montant').value = '';
  document.getElementById('tx_desc').value = '';
  document.getElementById('tx_date').value = new Date().toISOString().slice(0,10);
  document.getElementById('tx_type').value = 'recette';
  document.getElementById('tx_categorie').value = 'ecolage';
  openModal('txModal');
}
function editTx(id){
  const x = Data.transactions().find(x=>x.id===id); if(!x) return;
  document.getElementById('tx_id').value = x.id;
  document.getElementById('tx_type').value = x.type;
  document.getElementById('tx_categorie').value = x.categorie;
  document.getElementById('tx_montant').value = x.montant;
  document.getElementById('tx_date').value = x.date;
  document.getElementById('tx_desc').value = x.description||'';
  openModal('txModal');
}
function saveTx(){
  const id = document.getElementById('tx_id').value;
  const list = Data.transactions();
  const obj = {
    id: id || uid('tx'),
    type: document.getElementById('tx_type').value,
    categorie: document.getElementById('tx_categorie').value,
    montant: Number(document.getElementById('tx_montant').value)||0,
    date: document.getElementById('tx_date').value,
    description: document.getElementById('tx_desc').value.trim(),
  };
  const idx = list.findIndex(x=>x.id===id);
  if(idx>=0) list[idx]=obj; else list.push(obj);
  Data.saveTransactions(list);
  closeModal('txModal'); renderTx();
  showToast('✓ ' + t('save'), 'success');
}
function deleteTx(id){
  confirmAction('confirm_delete', ()=>{
    Data.saveTransactions(Data.transactions().filter(x=>x.id!==id));
    renderTx(); showToast('✓ ' + t('delete'), 'success');
  });
}

/* ============================== 10. NOTES ============================== */
function populateNoteClassSelect(){
  const sel = document.getElementById('n_classe');
  const prev = sel.value;
  sel.innerHTML = CLASSES.map(c=>`<option value="${c.id}">${c.nom} (${t(c.niveau)})</option>`).join('');
  if(prev) sel.value = prev;
}
function currentNoteLevel(){ return CLASSES.find(c=>c.id===document.getElementById('n_classe').value)?.niveau || 'primaire'; }

function renderSubjectPills(){
  const subjects = MATIERES[currentNoteLevel()];
  if(!currentGradeSubject || !subjects.find(s=>s.id===currentGradeSubject)) currentGradeSubject = subjects[0].id;
  document.getElementById('subjectPills').innerHTML = subjects.map(m=>
    `<button class="${m.id===currentGradeSubject?'active':''}" onclick="setGradeSubject('${m.id}')">${m.nom} <small>(${t('note_coef')} ${m.coef})</small></button>`).join('');
}
function setGradeSubject(id){ currentGradeSubject = id; renderSubjectPills(); renderGrades(); }
function onNoteClassOrTermChange(){ currentGradeSubject = null; renderSubjectPills(); renderGrades(); }

function computeRowAvg(g){
  if(!g) return '—';
  if(g.d1===undefined && g.d2===undefined && g.compo===undefined) return '—';
  const d1=Number(g.d1)||0, d2=Number(g.d2)||0, compo=Number(g.compo)||0;
  return ((d1+d2+(compo*2))/4).toFixed(2)+'/20';
}
function renderGrades(){
  const classId = document.getElementById('n_classe').value;
  const term = document.getElementById('n_term').value;
  const subj = MATIERES[currentNoteLevel()].find(m=>m.id===currentGradeSubject);
  document.getElementById('gradeTableTitle').textContent = subj ? subj.nom : '';

  const students = Data.students().filter(s=>s.classe===classId);
  const grades = Data.grades();
  const tbody = document.getElementById('gradeTbody');
  if(!students.length){ tbody.innerHTML = `<tr><td colspan="5" class="empty-state" data-i18n="stud_none"></td></tr>`; applyLangSilent(); return; }

  tbody.innerHTML = students.map(s=>{
    const key = `${classId}__${term}__${currentGradeSubject}__${s.id}`;
    const g = grades[key] || {};
    return `<tr>
      <td><b>${s.prenom} ${s.nom}</b></td>
      <td><input type="number" min="0" max="20" step="0.5" style="width:80px;padding:6px 8px;border:1.5px solid var(--border);border-radius:8px;" data-key="${key}" data-field="d1" value="${g.d1 ?? ''}"></td>
      <td><input type="number" min="0" max="20" step="0.5" style="width:80px;padding:6px 8px;border:1.5px solid var(--border);border-radius:8px;" data-key="${key}" data-field="d2" value="${g.d2 ?? ''}"></td>
      <td><input type="number" min="0" max="20" step="0.5" style="width:80px;padding:6px 8px;border:1.5px solid var(--border);border-radius:8px;" data-key="${key}" data-field="compo" value="${g.compo ?? ''}"></td>
      <td class="num" id="rowavg_${s.id}">${computeRowAvg(g)}</td>
    </tr>`;
  }).join('');

  tbody.querySelectorAll('input').forEach(inp=>{
    inp.addEventListener('input', ()=>{
      const key = inp.dataset.key, field = inp.dataset.field;
      const grades = Data.grades();
      grades[key] = grades[key] || {};
      grades[key][field] = inp.value;
      Data.saveGrades(grades);
      const studentId = key.split('__')[3];
      document.getElementById('rowavg_'+studentId).textContent = computeRowAvg(grades[key]);
    });
  });
}
function saveAllGrades(){ showToast('✓ ' + t('note_saved'), 'success'); }

/* ============================== 11. BULLETINS ============================== */
function populateBulletinClassSelect(){
  const sel = document.getElementById('b_classe');
  const prev = sel.value;
  sel.innerHTML = CLASSES.map(c=>`<option value="${c.id}">${c.nom} (${t(c.niveau)})</option>`).join('');
  if(prev) sel.value = prev;
}
function populateBulletinStudentSelect(){
  const classId = document.getElementById('b_classe').value;
  const students = Data.students().filter(s=>s.classe===classId);
  document.getElementById('b_student').innerHTML = students.map(s=>`<option value="${s.id}">${s.prenom} ${s.nom}</option>`).join('') || `<option value="">—</option>`;
}
function appreciationFor(avg){
  if(avg===null) return '';
  if(avg>=16) return t('app_excellent');
  if(avg>=12) return t('app_good');
  if(avg>=10) return t('app_average');
  return t('app_weak');
}
function generateBulletin(){
  const classId = document.getElementById('b_classe').value;
  const studentId = document.getElementById('b_student').value;
  const term = document.getElementById('b_term').value;
  const student = Data.students().find(s=>s.id===studentId);
  if(!student){ showToast(t('stud_none'), 'danger'); return; }

  const level = CLASSES.find(c=>c.id===classId)?.niveau || 'primaire';
  const matieres = MATIERES[level];
  const grades = Data.grades();

  const classStudents = Data.students().filter(s=>s.classe===classId);
  const ranking = classStudents.map(s=>({id:s.id, avg: Data.studentAverage(s.id, classId, term)}))
    .filter(x=>x.avg!==null).sort((a,b)=>b.avg-a.avg);
  const rank = ranking.findIndex(x=>x.id===studentId) + 1;
  const generalAvg = Data.studentAverage(studentId, classId, term);

  let rows = '';
  matieres.forEach(m=>{
    const key = `${classId}__${term}__${m.id}__${studentId}`;
    const g = grades[key] || {};
    const d1=g.d1!==undefined?Number(g.d1):null, d2=g.d2!==undefined?Number(g.d2):null, compo=g.compo!==undefined?Number(g.compo):null;
    const hasData = d1!==null || d2!==null || compo!==null;
    const moy = hasData ? ((d1||0)+(d2||0)+((compo||0)*2))/4 : null;
    rows += `<tr><td>${m.nom}</td><td class="num">${m.coef}</td>
      <td class="num">${d1!==null?d1:'—'}</td><td class="num">${d2!==null?d2:'—'}</td>
      <td class="num">${compo!==null?compo:'—'}</td><td class="num"><b>${moy!==null?moy.toFixed(2):'—'}</b></td></tr>`;
  });

  const termLabel = t(term);
  const dateNow = new Date().toLocaleDateString(getLang()==='ar'?'ar-EG':(getLang()==='en'?'en-GB':'fr-FR'));

  document.getElementById('bulletinOutput').innerHTML = `
    <div class="bulletin" id="printArea">
      <div class="bulletin-head">
        <img src="assets/logo.jpeg" alt="Logo">
        <div><div class="school-name">${t('school')}</div><div class="school-sub">${t('schoolTag')}</div></div>
      </div>
      <div class="bulletin-title"><h2>${t('bull_of')} ${termLabel}</h2></div>
      <div class="bulletin-meta">
        <div><span class="text-muted">${t('stud_name')}: </span><b>${student.prenom} ${student.nom}</b></div>
        <div><span class="text-muted">${t('stud_class')}: </span><b>${Data.className(classId)}</b></div>
        <div><span class="text-muted">${t('stud_dob')}: </span><b>${student.dateNaissance||'—'}</b></div>
      </div>
      <table class="data-table">
        <thead><tr><th>${t('note_subject')}</th><th>${t('note_coef')}</th>
          <th>${t('note_devoir1')}</th><th>${t('note_devoir2')}</th><th>${t('note_compo')}</th><th>${t('note_avg')}</th></tr></thead>
        <tbody>${rows}</tbody>
      </table>
      <div class="bulletin-summary">
        <div class="box"><div class="v">${generalAvg!==null?generalAvg.toFixed(2):'—'}/20</div><div class="l">${t('bull_general_avg')}</div></div>
        <div class="box"><div class="v">${rank || '—'}${rank? '/'+ranking.length:''}</div><div class="l">${t('bull_rank')}</div></div>
        <div class="box"><div class="v">${dateNow}</div><div class="l">${t('acc_date')}</div></div>
      </div>
      <p style="margin-top:18px;"><b>${t('bull_appreciation')}: </b>${appreciationFor(generalAvg)}</p>
      <div class="bulletin-sign">
        <div>${t('bull_parent_sign')}</div><div>${t('bull_teacher_sign')}</div><div>${t('bull_director')}</div>
      </div>
    </div>
    <div class="no-print" style="max-width:840px;margin:16px auto 0;text-align:right;">
      <button class="btn btn-gold" onclick="window.print()" data-i18n="print"></button>
    </div>`;
  applyLangSilent();
}

/* ============================== 12. PARAMÈTRES ============================== */
function loadSchoolInfo(){
  const s = Data.settings();
  document.getElementById('set_name').value = s.schoolName || t('school');
  document.getElementById('set_phone').value = s.phone || '';
  document.getElementById('set_address').value = s.address || '';
}
function saveSchoolInfo(){
  Data.saveSettings({
    schoolName: document.getElementById('set_name').value.trim(),
    phone: document.getElementById('set_phone').value.trim(),
    address: document.getElementById('set_address').value.trim(),
  });
  showToast('✓ ' + t('set_saved'), 'success');
}
async function doChangePassword(){
  const cur = document.getElementById('pw_current').value;
  const next = document.getElementById('pw_new').value;
  const confirm2 = document.getElementById('pw_confirm').value;
  if(!next || next.length<4){ showToast('Mot de passe trop court', 'danger'); return; }
  if(next !== confirm2){ showToast('Les mots de passe ne correspondent pas', 'danger'); return; }
  const res = await changePassword(cur, next);
  if(res.ok){ showToast('✓ ' + t('set_saved'), 'success'); ['pw_current','pw_new','pw_confirm'].forEach(id=>document.getElementById(id).value=''); }
  else showToast(t('login_error'), 'danger');
}
function exportBackup(){
  const backup = { teachers:Data.teachers(), students:Data.students(), transactions:Data.transactions(),
    grades:Data.grades(), settings:Data.settings(), exportedAt:new Date().toISOString() };
  const blob = new Blob([JSON.stringify(backup,null,2)], {type:'application/json'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = 'sauvegarde-nouroul-islam-'+new Date().toISOString().slice(0,10)+'.json';
  a.click(); URL.revokeObjectURL(url);
}
function importBackup(evt){
  const file = evt.target.files[0]; if(!file) return;
  const reader = new FileReader();
  reader.onload = function(e){
    try{
      const data = JSON.parse(e.target.result);
      if(data.teachers) Data.saveTeachers(data.teachers);
      if(data.students) Data.saveStudents(data.students);
      if(data.transactions) Data.saveTransactions(data.transactions);
      if(data.grades) Data.saveGrades(data.grades);
      if(data.settings) Data.saveSettings(data.settings);
      showToast('✓ ' + t('set_saved'), 'success');
      loadSchoolInfo();
    }catch(err){ showToast('Fichier invalide', 'danger'); }
  };
  reader.readAsText(file);
}
function resetDemoData(){
  confirmAction('confirm_delete', ()=>{
    [DB_KEYS.teachers, DB_KEYS.students, DB_KEYS.transactions, DB_KEYS.grades].forEach(k=>localStorage.removeItem(k));
    seedIfEmpty();
    showToast('✓ ' + t('set_saved'), 'success');
  });
}

/* ============================== 13. INITIALISATION ============================== */
document.addEventListener('DOMContentLoaded', async () => {
  seedIfEmpty();
  await ensurePasswordInitialized();
  applyLang();

  document.getElementById('loginForm').addEventListener('submit', async function(e){
    e.preventDefault();
    const pwd = document.getElementById('password').value;
    const ok = await tryLogin(pwd);
    const err = document.getElementById('loginError');
    if(ok){ err.style.display='none'; showApp(); }
    else { err.style.display='block'; document.getElementById('password').focus(); }
  });

  document.getElementById('teacherSearchBox').addEventListener('input', renderTeachers);
  document.getElementById('studentSearchBox').addEventListener('input', renderStudents);

  if(isAuthenticated()) showApp(); else showLogin();
});
