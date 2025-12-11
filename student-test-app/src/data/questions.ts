
export type Question = {
  id: number;
  text: string;
  options: string[];
  correctAnswer: number; // Index of the correct option (0-3)
};

export const grade6VariantA: Question[] = [
  {
    id: 1,
    text: "Мэдрэгч юу хийдэг вэ?",
    options: [
      "Роботыг хөдөлгөдөг",
      "Роботын нүд, чих шиг ажилладаг, орчныг мэдэрдэг",
      "Роботыг програмчилдаг",
      "Роботыг засдаг"
    ],
    correctAnswer: 1
  },
  {
    id: 2,
    text: "Хөдөлгүүр юу хийдэг вэ?",
    options: [
      "Мэдээлэл цуглуулдаг",
      "Роботын булчин шиг ажилладаг, хөдөлгөөн хийдаг",
      "Роботыг програмчилдаг",
      "Роботыг шинжилдэг"
    ],
    correctAnswer: 1
  },
  {
    id: 3,
    text: "Роботууд ямар ажлууд хийдэг вэ?",
    options: [
      "Зөвхөн тоглоом",
      "Давтагдах ажил, нарийн ажил, аюултай ажил",
      "Зөвхөн цэвэрлэгээ",
      "Зөвхөн үйлдвэрлэл"
    ],
    correctAnswer: 1
  },
  {
    id: 4,
    text: "Машин үйлдвэрлэлд робот юу хийдэг вэ?",
    options: [
      "Машины хэсгүүдийг угсардаг, будагддаг",
      "Зөвхөн хяналт тавьдаг",
      "Зөвхөн засвар хийдэг",
      "Юу ч хийхгүй"
    ],
    correctAnswer: 0
  },
  {
    id: 5,
    text: "Роботууд хүний ажлыг орлох уу?",
    options: [
      "Зарим ажлыг орлох боловч шинэ ажил мөн бий болно",
      "Бүх ажлыг орлоно",
      "Огт орлохгүй",
      "Зөвхөн аюултай ажлыг орлоно"
    ],
    correctAnswer: 0
  },
  {
    id: 6,
    text: "Удирдлагын систем гэж юу вэ?",
    options: [
      "Роботын тархи, програм ёсоор ажилладаг",
      "Роботын хөл",
      "Роботын гар",
      "Роботын нүд"
    ],
    correctAnswer: 0
  },
  {
    id: 7,
    text: "Эргэх холбоо (feedback loop) гэж юу вэ?",
    options: [
      "Мэдрэгч мэдээллийг удирдлага руу буцааж илгээдэг процесс",
      "Роботын хөдөлгөөн",
      "Програмын код",
      "Интернет холболт"
    ],
    correctAnswer: 0
  },
  {
    id: 8,
    text: "Халаалтын систем дэх терморегулятор юу хийдэг вэ?",
    options: [
      "Температурыг мэдрэх, тохируулах",
      "Цонх нээдэг",
      "Цаг харуулдаг",
      "Гэрэл асаадаг"
    ],
    correctAnswer: 0
  },
  {
    id: 9,
    text: "Ухаалаг гэр (smart home) гэж юу вэ?",
    options: [
      "Удирдлагын системтэй, автоматаар ажилладаг гэр",
      "Том гэр",
      "Шинэ гэр",
      "Үнэтэй гэр"
    ],
    correctAnswer: 0
  },
  {
    id: 10,
    text: "Роботууд эмнэлэгт юу хийдэг вэ?",
    options: [
      "Өвчтөнд тусалдаг, мэс засал хийдэг, оношлогоо тавьдаг",
      "Зөвхөн цэвэрлэдэг",
      "Зөвхөн хоол хүргэдэг",
      "Юу ч хийхгүй"
    ],
    correctAnswer: 0
  },
  {
    id: 11,
    text: "Наноробот гэж юу вэ?",
    options: [
      "Маш жижиг робот, хүний биед ажиллаж чадна",
      "Том робот",
      "Хурдан робот",
      "Үнэтэй робот"
    ],
    correctAnswer: 0
  },
  {
    id: 12,
    text: "Нисгэгчгүй нисдэг тэрэг (drone) юу хийдэг вэ?",
    options: [
      "Агаараас зураг авах, хүргэлт хийх, газар нутгийг судлах",
      "Зөвхөн тоглоом",
      "Зөвхөн цэнгээний үзүүлбэр",
      "Юу ч хийхгүй"
    ],
    correctAnswer: 0
  },
  {
    id: 13,
    text: "Тариалангийн роботууд юу хийдэг вэ?",
    options: [
      "Тариа хурааж, хог ургамлын эсрэг тэмцдэг",
      "Зөвхөн усалдаг",
      "Зөвхөн хяналт тавьдаг",
      "Юу ч хийхгүй"
    ],
    correctAnswer: 0
  },
  {
    id: 14,
    text: "Робот машин юунд ашигтай вэ?",
    options: [
      "Аюулгүй жолоодох, жолооч хэрэггүй",
      "Зөвхөн хурдан явдаг",
      "Зөвхөн үзэсгэлэнт",
      "Зөвхөн үнэтэй"
    ],
    correctAnswer: 0
  },
  {
    id: 15,
    text: "Хамтран ажилладаг роботууд (collaborative robots) гэж юу вэ?",
    options: [
      "Хамтдаа ажилладаг, нэг зүйлийг хамтдаа хийдэг роботууд",
      "Хүүхдийн тоглоом",
      "Тусдаа ажилладаг роботууд",
      "Хуучин роботууд"
    ],
    correctAnswer: 0
  },
  {
    id: 16,
    text: "Вэб хуудас гэж юу вэ?",
    options: [
      "Интернет дээрх мэдээлэл харуулдаг хуудас",
      "Номын хуудас",
      "Цаасан хуудас",
      "Зургийн цомог"
    ],
    correctAnswer: 0
  },
  {
    id: 17,
    text: "Вэб хуудсын толгой хэсэг (header) юу агуулдаг вэ?",
    options: [
      "Лого, вэб хуудасны нэр",
      "Зөвхөн зураг",
      "Зөвхөн текст",
      "Юу ч агуулахгүй"
    ],
    correctAnswer: 0
  },
  {
    id: 18,
    text: "Вэб хуудсын үндсэн хэсэг (body) юу агуулдаг вэ?",
    options: [
      "Үндсэн мэдээлэл, текст, зураг",
      "Зөвхөн лого",
      "Зөвхөн цэс",
      "Юу ч агуулахгүй"
    ],
    correctAnswer: 0
  },
  {
    id: 19,
    text: "Вэб хуудсын доод хэсэг (footer) юу агуулдаг вэ?",
    options: [
      "Холбоосууд, бодлого, бусад хуудас руу шилжих холбоос",
      "Зөвхөн зураг",
      "Зөвхөн видео",
      "Юу ч агуулахгүй"
    ],
    correctAnswer: 0
  },
  {
    id: 20,
    text: "Холбоос (hyperlink) юу хийдэг вэ?",
    options: [
      "Өөр хуудас руу шилжүүлдэг",
      "Зураг харуулдаг",
      "Дуу гаргадаг",
      "Текст устгадаг"
    ],
    correctAnswer: 0
  },
  {
    id: 21,
    text: "Вэб хуудсын дизайн юунд чухал вэ?",
    options: [
      "Сайхан харагдах, мэдээллийг ойлгомжтой болгох",
      "Зөвхөн өнгө",
      "Зөвхөн хэмжээ",
      "Чухал биш"
    ],
    correctAnswer: 0
  },
  {
    id: 22,
    text: "Цэс (menu) юу хийдэг вэ?",
    options: [
      "Вэб сайтын хуудаснуудад шууд очих боломж олгодог",
      "Хоол харуулдаг",
      "Зураг хадгалдаг",
      "Юу ч хийхгүй"
    ],
    correctAnswer: 0
  },
  {
    id: 23,
    text: "Вэб хуудас үүсгэхэд юуг анхаарах хэрэгтэй вэ?",
    options: [
      "Зөв зураг сонгох, текст тодорхой байх, аюулгүй байх",
      "Зөвхөн өнгө",
      "Зөвхөн хэмжээ",
      "Юу ч анхаарахгүй"
    ],
    correctAnswer: 0
  },
  {
    id: 24,
    text: "Зургийн зохиогчийн эрх (copyright) гэж юу вэ?",
    options: [
      "Зургийг зөвшөөрөлгүй ашиглаж болохгүй",
      "Аль ч зургийг ашиглаж болно",
      "Зургийн үнэ",
      "Зургийн хэмжээ"
    ],
    correctAnswer: 0
  },
  {
    id: 25,
    text: "Вэб хуудас шалгахдаа юу шалгах вэ?",
    options: [
      "Үг зүй, холбоос ажиллаж байгаа эсэх, харагдах байдал",
      "Зөвхөн өнгө",
      "Зөвхөн хэмжээ",
      "Юу ч шалгахгүй"
    ],
    correctAnswer: 0
  },
  {
    id: 26,
    text: "Вэб хуудсанд текст нэмэхдээ юу хийх вэ?",
    options: [
      "Add сонголт дээр дарж, Text сонгох",
      "Зураг оруулах",
      "Устгах товч дарах",
      "Юу ч хийхгүй"
    ],
    correctAnswer: 0
  },
  {
    id: 27,
    text: "Вэб хуудсанд зураг нэмэхдээ юу анхаарах вэ?",
    options: [
      "Зургийн зохиогчийн эрх, зургийн хэмжээ, байрлал",
      "Зөвхөн өнгө",
      "Зөвхөн хүрээ",
      "Юу ч анхаарахгүй"
    ],
    correctAnswer: 0
  },
  {
    id: 28,
    text: "Вэб сайт гэж юу вэ?",
    options: [
      "Олон вэб хуудаснуудын цуглуулга",
      "Нэг вэб хуудас",
      "Зураг",
      "Видео"
    ],
    correctAnswer: 0
  },
  {
    id: 29,
    text: "Wireframe гэж юу вэ?",
    options: [
      "Вэб хуудсын бүтцийг харуулсан загвар зураг",
      "Утас",
      "Кабель",
      "Програм"
    ],
    correctAnswer: 0
  },
  {
    id: 30,
    text: "Вэб хуудсыг хэрхэн хянах вэ?",
    options: [
      "Preview товч дээр дарж харах",
      "Устгах",
      "Хадгалахгүй",
      "Хаах"
    ],
    correctAnswer: 0
  }
];

export const grade6VariantB: Question[] = [
  {
    id: 1,
    text: "Bumper мэдрэгч юу хийдэг вэ?",
    options: [
      "Юманд мөргөхийг мэдэрдэг",
      "Температур мэдэрдэг",
      "Дуу мэдэрдэг",
      "Үнэр мэдэрдэг"
    ],
    correctAnswer: 0
  },
  {
    id: 2,
    text: "Давтагдах ажил гэж юу вэ?",
    options: [
      "Олон удаа адилхан хийгддэг ажил",
      "Нэг удаа хийгддэг ажил",
      "Хүнд ажил",
      "Хялбар ажил"
    ],
    correctAnswer: 0
  },
  {
    id: 3,
    text: "Нарийн ажил гэж юу вэ?",
    options: [
      "Их анхаарал, нарийвчлал шаарддаг ажил",
      "Хурдан ажил",
      "Удаан ажил",
      "Энгийн ажил"
    ],
    correctAnswer: 0
  },
  {
    id: 4,
    text: "Аюултай ажилд роботууд яагаад ашигтай вэ?",
    options: [
      "Хүний эрүүл мэнд, амь насыг аюулд оруулахгүй",
      "Зөвхөн хурдан байдаг",
      "Зөвхөн хямд байдаг",
      "Юу ч ашиггүй"
    ],
    correctAnswer: 0
  },
  {
    id: 5,
    text: "Хамтран ажилладаг роботууд юунд ашиглагддаг вэ?",
    options: [
      "Машин угсралт, будах, дэлгүүрт зүйл эмхлэх",
      "Зөвхөн тоглоом",
      "Зөвхөн үзэсгэлэн",
      "Юу ч хийхгүй"
    ],
    correctAnswer: 0
  },
  {
    id: 6,
    text: "Хэт хурдан хөдөлгөөн мэдрэхийн тулд ямар мэдрэгч хэрэгтэй вэ?",
    options: [
      "Хурд мэдрэгч (speed sensor)",
      "Дуу мэдрэгч",
      "Гэрэл мэдрэгч",
      "Үнэр мэдрэгч"
    ],
    correctAnswer: 0
  },
  {
    id: 7,
    text: "Халаалтын системд температурын мэдрэгч хаана байрладаг вэ?",
    options: [
      "Гэрийн дотор, температурыг тогтмол хэмжинэ",
      "Гэрийн гадна",
      "Зөвхөн өрөөнд",
      "Хаана ч байрладаггүй"
    ],
    correctAnswer: 0
  },
  {
    id: 8,
    text: "Удирдлагын систем хэзээ асдаг вэ?",
    options: [
      "Мэдрэгч тодорхой утга илэрхийлэхэд",
      "Хэзээ ч асдаггүй",
      "Зөвхөг өглөө",
      "Зөвхөн орой"
    ],
    correctAnswer: 0
  },
  {
    id: 9,
    text: "Ухаалаг гэрийн ашиг тус юу вэ?",
    options: [
      "Эрчим хүч хэмнэх, аюулгүй байх, тав тухтай",
      "Зөвхөн үзэсгэлэнт",
      "Зөвхөн үнэтэй",
      "Ашиггүй"
    ],
    correctAnswer: 0
  },
  {
    id: 10,
    text: "Эмнэлэгийн роботууд ямар ажил хийдэг вэ?",
    options: [
      "Өвчтөн асрах, мэс засал, оношлогоо",
      "Зөвхөн цэвэрлэх",
      "Зөвхөг хоол хүргэх",
      "Юу ч хийхгүй"
    ],
    correctAnswer: 0
  },
  {
    id: 11,
    text: "Наноробот хаана ажиллаж чадах вэ?",
    options: [
      "Хүний цусны урсгалд, халдвартай тэмцэх",
      "Зөвхөн гадна",
      "Зөвхөн усанд",
      "Хаана ч ажиллахгүй"
    ],
    correctAnswer: 0
  },
  {
    id: 12,
    text: "Машин хотын робот юунд тустай вэ?",
    options: [
      "Машины төрөл бүрийн хэсгийг угсрах, будах",
      "Зөвхөг машин жолоодох",
      "Зөвхөг машин угаах",
      "Юу ч тусалдаггүй"
    ],
    correctAnswer: 0
  },
  {
    id: 13,
    text: "Нисгэгчгүй тэрэг ямар ажил хийдэг вэ?",
    options: [
      "Зураг авах, хүргэлт, байр судлах",
      "Зөвхөг тоглоом",
      "Зөвхөг үзүүлбэр",
      "Юу ч хийхгүй"
    ],
    correctAnswer: 0
  },
  {
    id: 14,
    text: "Тариалангийн дрон юунд ашиглагддаг вэ?",
    options: [
      "Таримал хяналт тавих, хог ургамал устгах",
      "Зөвхөг усалгаанд",
      "Зөвхөг зураг авахад",
      "Юу ч ашиглагдахгүй"
    ],
    correctAnswer: 0
  },
  {
    id: 15,
    text: "Хиймэл оюун ухаан (AI) гэж юу вэ?",
    options: [
      "Робот хүн шиг сурч, шийдвэр гаргаж чаддаг чадвар",
      "Интернет холболт",
      "Батерей",
      "Програм"
    ],
    correctAnswer: 0
  },
  {
    id: 16,
    text: "1991 онд юу болсон бэ?",
    options: [
      "Анхны вэб хуудас үүссэн",
      "Робот бүтээгдсэн",
      "Компьютер бүтээгдсэн",
      "Интернет бүтээгдсэн"
    ],
    correctAnswer: 0
  },
  {
    id: 17,
    text: "Вэб хуудсын гол бүрэлдэхүүн хэсгүүд юу вэ?",
    options: [
      "Толгой, үндсэн хэсэг, доод хэсэг",
      "Зөвхөг текст",
      "Зөвхөг зураг",
      "Зөвхөг холбоос"
    ],
    correctAnswer: 0
  },
  {
    id: 18,
    text: "Гарчиг (heading) юунд ашиглагддаг вэ?",
    options: [
      "Хуудасны сэдвийг тодорхой болгох, текст ялгах",
      "Зөвхөг үзэсгэлэн",
      "Зөвхөг өнгө",
      "Юу ч ашиглагдахгүй"
    ],
    correctAnswer: 0
  },
  {
    id: 19,
    text: "Зураг вэб хуудсанд юунд ашиглагддаг вэ?",
    options: [
      "Мэдээллийг сонирхолтой, ойлгомжтой болгох",
      "Зөвхөг хуудас дүүргэх",
      "Зөвхөг үзэсгэлэн",
      "Ашиггүй"
    ],
    correctAnswer: 0
  },
  {
    id: 20,
    text: "Вэб хуудсын цэс юунд хэрэгтэй вэ?",
    options: [
      "Хуудаснууд хооронд шилжихэд хялбар болгоход",
      "Зөвхөг үзэсгэлэн",
      "Зөвхөг хоол харуулахад",
      "Хэрэггүй"
    ],
    correctAnswer: 0
  },
  {
    id: 21,
    text: "Вэб хуудас үүсгэхдээ юунаас эхлэх вэ?",
    options: [
      "Төлөвлөгөө гаргах, бүтэц зохиох (wireframe)",
      "Зөвхөг өнгө сонгох",
      "Зөвхөг зураг оруулах",
      "Юунаас ч эхлэхгүй"
    ],
    correctAnswer: 0
  },
  {
    id: 22,
    text: "Үг зүйн алдаа шалгахын тулд юу хийх вэ?",
    options: [
      "Спеллчекер (spellchecker) ашиглах",
      "Үл тоомсорлох",
      "Найзаас асуух",
      "Юу ч хийхгүй"
    ],
    correctAnswer: 0
  },
  {
    id: 23,
    text: "Вэб хуудас хянахдаа юу анхаарах вэ?",
    options: [
      "Үг зүй, холбоос, зургийн хэмжээ, өнгөний зохицол",
      "Зөвхөг үг зүй",
      "Зөвхөг өнгө",
      "Юу ч анхаарахгүй"
    ],
    correctAnswer: 0
  },
  {
    id: 24,
    text: "Бусдын зураг ашиглахдаа юу хийх вэ?",
    options: [
      "Зөвшөөрөл авах, эх сурвалж заах",
      "Чөлөөтэй ашиглах",
      "Юу ч хийхгүй",
      "Зөвхөг татах"
    ],
    correctAnswer: 0
  },
  {
    id: 25,
    text: "Вэб хуудсанд зураг нэмэхдээ юу анхаарах вэ?",
    options: [
      "Зургийн чанар сайн, хэмжээ тохиромжтой, зохиогчийн эрх",
      "Зөвхөг хэмжээ",
      "Зөвхөг өнгө",
      "Юу ч анхаарахгүй"
    ],
    correctAnswer: 0
  },
  {
    id: 26,
    text: "Вэб сайтын нүүр хуудас (home page) юу вэ?",
    options: [
      "Хэрэглэгчдийн анх ордог гол хуудас",
      "Сүүлийн хуудас", "Дунд хуудас", "Ямар ч хуудас биш"
    ],
    correctAnswer: 0
  },
  {
    id: 27,
    text: "Шинэ хуудас нэмэхдээ хэрхэн нэмэх вэ?",
    options: [
      "Add pages сонголт сонгох, нэр өгөх",
      "Устгах товч дарах",
      "Хадгалахгүй байх",
      "Юу ч хийхгүй"
    ],
    correctAnswer: 0
  },
  {
    id: 28,
    text: "Хуудаснуудыг хооронд нь холбохдоо юу ашиглах вэ?",
    options: [
      "Цэс үүсгэж холбоос хийх",
      "Зураг оруулах",
      "Текст бичих",
      "Юу ч ашиглахгүй"
    ],
    correctAnswer: 0
  },
  {
    id: 29,
    text: "Preview товч юунд хэрэгтэй вэ?",
    options: [
      "Вэб хуудас хэрхэн харагдахыг урьдчилан харах",
      "Устгахад",
      "Хадгалахад",
      "Хэрэггүй"
    ],
    correctAnswer: 0
  },
  {
    id: 30,
    text: "Вэб хуудсыг хэн ч үзэж болох уу?",
    options: [
      "Тийм, интернетэд байршуулбал дэлхий дээрх хэн ч үзнэ",
      "Үгүй, зөвхөг би үзнэ",
      "Зөвхөг багш үзнэ",
      "Хэн ч үзэж чадахгүй"
    ],
    correctAnswer: 0
  }
];

export const grade11VariantA: Question[] = [
  {
    id: 1,
    text: "Дараах кодын үр дүнд юу хэвлэгдэх вэ?\n\ncity = \"Ulaanbaatar\"\ncountry = \"Mongolia\"\nprint(f\"{city} is in {country}\")",
    options: [
      "city is in country",
      "Ulaanbaatar is in Mongolia",
      "{city} is in {country}",
      "Алдаа гарна"
    ],
    correctAnswer: 1
  },
  {
    id: 2,
    text: "Кодын гүйцэтгэлийн дараах үр дүнг тодорхойлно уу.\n\nx = \"Hello\"\ny = \"World\"\nz = x + \" \" + y\nprint(z)",
    options: [
      "Hello World",
      "HelloWorld",
      "Hello World", // Duplicate in request, simplified
      "xy"
    ],
    correctAnswer: 0
  },
  {
    id: 3,
    text: "text хувьсагчаас 'Y' үсгийг гаргаж авах индекслэлт аль нь вэ?\n\ntext = \"PYTHON\"",
    options: [
      "text[1]",
      "text[-5]",
      "text[0]",
      "A болон B хоёулаа зөв"
    ],
    correctAnswer: 3
  },
  {
    id: 4,
    text: "Слайсинг үйлдлийн үр дүнг тодорхойлно уу.\n\nmessage = \"Hello Python World\"\npart = message[6:12]\nprint(part)",
    options: [
      "Python",
      "Python World",
      "Hello",
      "Hello Python"
    ],
    correctAnswer: 0
  },
  {
    id: 5,
    text: "Дараах кодын үр дүнд юу хэвлэгдэх вэ?\n\nword = \" COMPUTER \"\nresult = word.strip().lower()\nprint(result)",
    options: [
      "COMPUTER",
      "computer",
      "computer", // Duplicated options in request, keeping as is
      "COMPUTER"
    ],
    correctAnswer: 1
  },
  {
    id: 6,
    text: "String методын үр дүнг тодорхойлно уу.\n\nphrase = \"banana apple banana\"\nnew_phrase = phrase.replace(\"banana\", \"orange\")\nprint(new_phrase)",
    options: [
      "orange apple banana",
      "banana apple orange",
      "orange apple orange",
      "orange orange orange"
    ],
    correctAnswer: 2
  },
  {
    id: 7,
    text: "Сүүлийн үсгийг зөв гаргаж авах код аль нь вэ?\n\nname = \"Python\"",
    options: [
      "name[-1]",
      "name[len(name)]",
      "name[5]",
      "A болон C хоёулаа зөв"
    ],
    correctAnswer: 3
  },
  {
    id: 8,
    text: "Кодын үр дүнд хэдийг хэвлэх вэ?\n\ndata = \"ABC\\nDEF\\nGHI\"\nprint(len(data))",
    options: [
      "9",
      "11",
      "12",
      "10"
    ],
    correctAnswer: 1
  },
  {
    id: 9,
    text: "Давталт хэдэн удаа гүйцэтгэгдэх вэ?\n\nfor i in range(7):\nprint(i)",
    options: [
      "6 удаа",
      "7 удаа",
      "8 удаа",
      "5 удаа"
    ],
    correctAnswer: 1
  },
  {
    id: 10,
    text: "Ямар тоонууд хэвлэгдэх вэ?\n\nfor x in range(2, 7):\nprint(x)",
    options: [
      "2, 3, 4, 5, 6",
      "2, 3, 4, 5, 6, 7",
      "3, 4, 5, 6",
      "2, 7"
    ],
    correctAnswer: 0
  },
  {
    id: 11,
    text: "Нийлбэрийн үр дүн хэд байх вэ?\n\nsum = 0\nfor i in range(2, 11, 2):\nsum += i\nprint(sum)",
    options: [
      "20",
      "30",
      "25",
      "28"
    ],
    correctAnswer: 1
  },
  {
    id: 12,
    text: "Кодын үр дүнд юу хэвлэгдэх вэ?\n\ncolors = [\"red\", \"blue\", \"green\"]\nfor color in colors:\nif len(color) == 4:\nprint(color)",
    options: [
      "red",
      "blue",
      "red, blue",
      "green"
    ],
    correctAnswer: 2
  },
  {
    id: 13,
    text: "Хэдэн удаа гүйцэтгэгдэх вэ?\n\ntext = \"CODE\"\nfor letter in text:\nprint(letter)",
    options: [
      "3",
      "4",
      "5",
      "1"
    ],
    correctAnswer: 1
  },
  {
    id: 14,
    text: "Тэгш тоонуудын нийлбэрийг олох зөв код аль нь вэ? (1-10 хүртэл)",
    options: [
      "sum = 0; for i in range(2, 11, 2): sum += i",
      "sum = 0; for i in range(1, 11): if i % 2 == 0: sum += i",
      "sum = 0; for i in range(1, 11): if i % 2 == 1: sum += i",
      "А болон В хоёулаа зөв"
    ],
    correctAnswer: 3
  },
  {
    id: 15,
    text: "Үр дүнд юу хэвлэгдэх вэ?\n\nfor num in range(15, 10, -1):\nprint(num, end=\" \")",
    options: [
      "15 14 13 12 11",
      "15 14 13 12 11 10",
      "10 11 12 13 14 15",
      "15 13 11"
    ],
    correctAnswer: 0
  },
  {
    id: 16,
    text: "Хамгийн сүүлийн утга хэд байх вэ?\n\nresult = 0\nfor i in range(0, 5):\nresult = i * 2\nprint(result)",
    options: [
      "10",
      "8",
      "6",
      "4"
    ],
    correctAnswer: 1
  },
  {
    id: 17,
    text: "Үр дүн хэд байх вэ?\n\nnumbers = [5, 10, 15, 20, 25]\nanswer = numbers[1] + numbers[-2]\nprint(answer)",
    options: [
      "15",
      "30",
      "35",
      "25"
    ],
    correctAnswer: 1
  },
  {
    id: 18,
    text: "Жагсаалтын эцсийн байдал аль нь вэ?\n\nitems = [1, 2, 3]\nitems.append(4)\nitems.insert(1, 5)\nprint(items)",
    options: [
      "[1, 5, 2, 3, 4]",
      "[1, 2, 5, 3, 4]",
      "[5, 1, 2, 3, 4]",
      "[1, 2, 3, 4, 5]"
    ],
    correctAnswer: 0
  },
  {
    id: 19,
    text: "Слайсингийн үр дүн аль нь вэ?\n\ndata = [10, 20, 30, 40, 50, 60]\nresult = data[2:5]\nprint(result)",
    options: [
      "30, 40, 50",
      "20, 30, 40",
      "30, 40, 50, 60",
      "20, 30, 40, 50"
    ],
    correctAnswer: 0
  },
  {
    id: 20,
    text: "Set-ийн урт хэд байх вэ?\n\nnums = [2, 4, 4, 6, 6, 6, 8]\nunique = set(nums)\nprint(len(unique))",
    options: [
      "7",
      "4",
      "5",
      "3"
    ],
    correctAnswer: 1
  },
  {
    id: 21,
    text: "Кодын үр дүнд юу хэвлэгдэх вэ?\n\nnum = 12\nif num % 4 == 0:\nprint(\"A\")\nelse:\nprint(\"B\")",
    options: [
      "A",
      "B",
      "AB",
      "Юу ч хэвлэгдэхгүй"
    ],
    correctAnswer: 0
  },
  {
    id: 22,
    text: "Үр дүн юу байх вэ?\n\na = 20\nb = 20\nif a > b:\nprint(\"Том\")\nelse:\nprint(\"Бага эсвэл тэнцүү\")",
    options: [
      "Том",
      "Бага эсвэл тэнцүү",
      "Алдаа",
      "Бага"
    ],
    correctAnswer: 1
  },
  {
    id: 23,
    text: "score = 75 үед юу хэвлэгдэх вэ?\n\nscore = 75\nif score >= 80:\nresult = \"Сайн\"\nelif score >= 60:\nresult = \"Дундаж\"\nelse:\nresult = \"Муу\"\nprint(result)",
    options: [
      "Сайн",
      "Дундаж",
      "Муу",
      "Алдаа"
    ],
    correctAnswer: 1
  },
  {
    id: 24,
    text: "Юу хэвлэгдэх вэ?\n\nx = 5\ny = 10\nif x < y and y < 15:\nprint(\"Үнэн\")\nelse:\nprint(\"Худал\")",
    options: [
      "Үнэн",
      "Худал",
      "Алдаа",
      "Хоёулаа"
    ],
    correctAnswer: 0
  },
  {
    id: 25,
    text: "Кодын үр дүн юу вэ?\n\nage = 14\nheight = 160\nif age >= 12 and height >= 150:\nprint(\"Зөвшөөрнө\")\nelse:\nprint(\"Хориглоно\")",
    options: [
      "Зөвшөөрнө",
      "Хориглоно",
      "Алдаа",
      "Хоёулаа"
    ],
    correctAnswer: 0
  },
  {
    id: 26,
    text: "Үр дүнд юу хэвлэгдэх вэ?\n\nvalue = 50\nif value > 60:\nprint(\"Өндөр\")\nelif value >= 40 and value <= 60:\nprint(\"Дунд\")\nelse:\nprint(\"Бага\")",
    options: [
      "Өндөр",
      "Дунд",
      "Бага",
      "Алдаа"
    ],
    correctAnswer: 1
  },
  {
    id: 27,
    text: "Кодын үр дүн аль нь вэ?\n\ntemp = 18\nrain = False\nif temp > 25:\nprint(\"Халуун\")\nelif temp >= 15 and not rain:\nprint(\"Сайхан\")\nelse:\nprint(\"Хүйтэн\")",
    options: [
      "Халуун",
      "Сайхан",
      "Хүйтэн",
      "Алдаа"
    ],
    correctAnswer: 1
  }
];

export const grade11VariantB: Question[] = [
  {
    id: 1,
    text: "Үр дүнд юу хэвлэгдэх вэ?\n\nfirst = \"Python\"\nsecond = \"Programming\"\nprint(f\"{first} {second}\")",
    options: [
      "first second",
      "Python Programming",
      "{first} {second}",
      "Алдаа гарна"
    ],
    correctAnswer: 1
  },
  {
    id: 2,
    text: "Кодын үр дүн аль нь вэ?\n\na = \"Good\"\nb = \"Morning\"\nc = a + b\nprint(c)",
    options: [
      "Good Morning",
      "GoodMorning",
      "Good Morning",
      "ab"
    ],
    correctAnswer: 1
  },
  {
    id: 3,
    text: "'T' үсгийг зөв гаргах индекс аль нь вэ?\n\nword = \"COMPUTER\"",
    options: [
      "word[5]",
      "word[-3]",
      "word[4]",
      "A болон B хоёулаа зөв"
    ],
    correctAnswer: 3
  },
  {
    id: 4,
    text: "Слайсингийн үр дүн юу вэ?\n\ntext = \"Learn Python Today\"\nsection = text[6:12]\nprint(section)",
    options: [
      "Python",
      "Learn",
      "Python Today",
      "Learn Python"
    ],
    correctAnswer: 0
  },
  {
    id: 5,
    text: "Үр дүнд юу хэвлэгдэх вэ?\n\ndata = \" HELLO \"\noutput = data.strip().upper()\nprint(output)",
    options: [
      "hello",
      "HELLO",
      "HELLO",
      "hello"
    ],
    correctAnswer: 1
  },
  {
    id: 6,
    text: "Replace методын үр дүн аль нь вэ?\n\nsentence = \"I like cats and cats\"\nnew_sent = sentence.replace(\"cats\", \"dogs\", 1)\nprint(new_sent)",
    options: [
      "I like dogs and dogs",
      "I like cats and dogs",
      "I like dogs and cats",
      "I like cats and cats"
    ],
    correctAnswer: 2
  },
  {
    id: 7,
    text: "Эхний үсгийг зөв гаргах код аль нь вэ?\n\nlanguage = \" Java\"",
    options: [
      "language[0]",
      "language[-4]",
      "language[1]",
      "A болон B хоёулаа зөв"
    ],
    correctAnswer: 3
  },
  {
    id: 8,
    text: "Уртын үр дүн хэд вэ?\n\ninfo = \"Line1\\nLine2\"\nprint(len(info))",
    options: [
      "10",
      "11",
      "12",
      "9"
    ],
    correctAnswer: 1
  },
  {
    id: 9,
    text: "Хэдэн удаа давтагдах вэ?\n\nfor k in range(6):\nprint(k)",
    options: [
      "5 удаа",
      "6 удаа",
      "7 удаа",
      "4 удаа"
    ],
    correctAnswer: 1
  },
  {
    id: 10,
    text: "Ямар тоонууд хэвлэгдэх вэ?\n\nfor n in range(5, 10):\nprint(n)",
    options: [
      "5, 6, 7, 8, 9",
      "5, 6, 7, 8, 9, 10",
      "6, 7, 8, 9",
      "5, 10"
    ],
    correctAnswer: 0
  },
  {
    id: 11,
    text: "Нийлбэр хэд байх вэ?\n\ntotal = 0\nfor i in range(0, 13, 3):\ntotal += i\nprint(total)",
    options: [
      "15",
      "18",
      "21",
      "24"
    ],
    correctAnswer: 1
  },
  {
    id: 12,
    text: "Юу хэвлэгдэх вэ?\n\nanimals = [\"cat\", \"dog\", \"bird\", \"fish\"]\nfor animal in animals:\nif len(animal) == 3:\nprint(animal)",
    options: [
      "cat",
      "dog",
      "cat, dog",
      "bird"
    ],
    correctAnswer: 2
  },
  {
    id: 13,
    text: "Хэдэн удаа гүйцэтгэгдэх вэ?\n\nname = \" JAVA\"\nfor ch in name:\nprint(ch)",
    options: [
      "3",
      "4",
      "5",
      "2"
    ],
    correctAnswer: 1
  },
  {
    id: 14,
    text: "3-т хуваагддаг тоонуудын нийлбэр (1-15):",
    options: [
      "s = 0; for i in range(3, 16, 3): s += i",
      "s = 0; for i in range(1, 16): if i % 3 == 0: s += i",
      "s = 0; for i in range(1, 16): if i % 2 == 0: s += i",
      "А болон В хоёулаа зөв"
    ],
    correctAnswer: 3
  },
  {
    id: 15,
    text: "Үр дүн юу вэ?\n\nfor i in range(20, 15, -1):\nprint(i, end=\" \")",
    options: [
      "20 19 18 17 16",
      "20 19 18 17 16 15",
      "15 16 17 18 19 20",
      "20 18 16"
    ],
    correctAnswer: 0
  },
  {
    id: 16,
    text: "Сүүлийн утга хэд вэ?\n\nans = 1\nfor j in range(1, 4):\nans = ans * 2\nprint(ans)",
    options: [
      "2",
      "4",
      "8",
      "16"
    ],
    correctAnswer: 2
  },
  {
    id: 17,
    text: "Үр дүн хэд вэ?\n\nvals = [3, 6, 9, 12, 15]\nresult = vals[2] + vals[-1]\nprint(result)",
    options: [
      "21",
      "24",
      "18",
      "27"
    ],
    correctAnswer: 1
  },
  {
    id: 18,
    text: "Жагсаалт юу болох вэ?\n\narr = [10, 20, 30]\narr.append(40)\narr.insert(0, 5)\nprint(arr)",
    options: [
      "[5, 10, 20, 30, 40]",
      "[10, 5, 20, 30, 40]",
      "[10, 20, 30, 40, 5]",
      "[5, 40, 10, 20, 30]"
    ],
    correctAnswer: 0
  },
  {
    id: 19,
    text: "Слайсингийн үр дүн аль нь вэ?\n\nnums = [5, 10, 15, 20, 25, 30, 35]\npart = nums[1:5]\nprint(part)",
    options: [
      "[10, 15, 20, 25]",
      "[5, 10, 15, 20]",
      "[10, 15, 20, 25, 30]",
      "[15, 20, 25]"
    ],
    correctAnswer: 0
  },
  {
    id: 20,
    text: "Set-ийн урт хэд вэ?\n\nitems = [1, 1, 2, 3, 3, 3, 4]\nunique_items = set(items)\nprint(len(unique_items))",
    options: [
      "7",
      "5",
      "4",
      "3"
    ],
    correctAnswer: 2
  },
  {
    id: 21,
    text: "Үр дүн юу вэ?\n\nx = 18\nif x % 3 == 0:\nprint(\"Тийм\")\nelse:\nprint(\"Үгүй\")",
    options: [
      "Тийм",
      "Үгүй",
      "Хоёулаа",
      "Алдаа"
    ],
    correctAnswer: 0
  },
  {
    id: 22,
    text: "Юу хэвлэгдэх вэ?\n\nm = 15\nn = 20\nif m > n:\nprint(\"M их\")\nelse:\nprint(\"N их эсвэл тэнцүү\")",
    options: [
      "M их",
      "N их эсвэл тэнцүү",
      "Алдаа",
      "M тэнцүү N"
    ],
    correctAnswer: 1
  },
  {
    id: 23,
    text: "points = 65 үед үр дүн аль нь вэ?\n\npoints = 65\nif points >= 70:\ngrade = \"Өндөр\"\nelif points >= 50:\ngrade = \"Дунд\"\nelse:\ngrade = \"Доогуур\"\nprint(grade)",
    options: [
      "Өндөр",
      "Дунд",
      "Доогуур",
      "Алдаа"
    ],
    correctAnswer: 1
  },
  {
    id: 24,
    text: "Кодын үр дүн юу вэ?\n\na = 8\nb = 12\nif a < 10 or b < 10:\nprint(\"Нөхцөл биелсэн\")\nelse:\nprint(\"Биелээгүй\")",
    options: [
      "Нөхцөл биелсэн",
      "Биелээгүй",
      "Алдаа",
      "Хоёулаа"
    ],
    correctAnswer: 0
  },
  {
    id: 25,
    text: "Юу хэвлэгдэх вэ?\n\nweight = 55\nheight = 145\nif weight >= 50 and height >= 150:\nprint(\"OK\")\nelse:\nprint(\"NO\")",
    options: [
      "OK",
      "NO",
      "Алдаа",
      "Хоёулаа"
    ],
    correctAnswer: 1
  },
  {
    id: 26,
    text: "Үр дүн аль нь вэ?\n\nnum = 35\nif num > 50:\nprint(\"Их\")\nelif num >= 30 and num <= 50:\nprint(\"Дундаж\")\nelse:\nprint(\"Бага\")",
    options: [
      "Их",
      "Дундаж",
      "Бага",
      "Алдаа"
    ],
    correctAnswer: 1
  },
  {
    id: 27,
    text: "Кодын үр дүн юу вэ?\n\ndegree = 22\nsunny = True\nif degree > 30:\nprint(\"Халуун\")\nelif degree >= 20 and sunny:\nprint(\"Гоё\")\nelse:\nprint(\"Хүйтэн\")",
    options: [
      "Халуун",
      "Гоё",
      "Хүйтэн",
      "Алдаа"
    ],
    correctAnswer: 1
  }
];
