
export type Question = {
  id: number;
  text: string;
  options: string[];
  correctAnswer: number; // Index of the correct option (0-3)
};

export const variantA: Question[] = [
  {
    id: 1,
    text: "HTML нь юуны товчлол вэ?",
    options: [
      "Hyper Text Markup Language",
      "High Tech Modern Language",
      "Home Tool Markup Language",
      "Hyperlinks and Text Markup Language"
    ],
    correctAnswer: 0
  },
  {
    id: 2,
    text: "HTML баримт бичгийг зарлахад ямар тэг ашигладаг вэ?",
    options: [
      "<!DOCTYPE html>",
      "<html>",
      "<body>",
      "<head>"
    ],
    correctAnswer: 0
  },
  {
    id: 3,
    text: "Хамгийн том гарчиг үүсгэх тэг аль нь вэ?",
    options: [
      "<h6>",
      "<head>",
      "<h1>",
      "<header>"
    ],
    correctAnswer: 2
  },
  {
    id: 4,
    text: "Догол мөр үүсгэх тэг аль нь вэ?",
    options: [
      "<p>",
      "<br>",
      "<div>",
      "<span>"
    ],
    correctAnswer: 0
  },
  {
    id: 5,
    text: "Тодотгол бичвэр үүсгэх тэг аль нь вэ?",
    options: [
      "<b>",
      "<strong>",
      "<em>",
      "a болон b хоёулаа зөв" // Assuming "a болон c" meant A and B or similar bold tags. 
    ],
    correctAnswer: 3
  },
  {
    id: 6,
    text: "HTML-д коммент бичих зөв арга аль нь вэ?",
    options: [
      "// comment",
      "/* comment */",
      "<!-- comment -->",
      "# comment"
    ],
    correctAnswer: 2
  },
  {
    id: 7,
    text: "Хүснэгт үүсгэх тэг аль нь вэ?",
    options: [
      "<table>",
      "<tab>",
      "<tr>",
      "<td>"
    ],
    correctAnswer: 0
  },
  {
    id: 8,
    text: "Жагсаалтын элемент үүсгэх тэг аль нь вэ?",
    options: [
      "<li>",
      "<ul>",
      "<ol>",
      "<list>"
    ],
    correctAnswer: 0
  },
  {
    id: 9,
    text: "Холбоос үүсгэх тэг аль нь вэ?",
    options: [
      "<a>",
      "<link>",
      "<href>",
      "<url>"
    ],
    correctAnswer: 0
  },
  {
    id: 10,
    text: "Зураг оруулах тэг аль нь вэ?",
    options: [
      "<img>",
      "<image>",
      "<src>",
      "<pic>"
    ],
    correctAnswer: 0
  },
  {
    id: 11,
    text: "HTML-д аттрибут нь юу вэ?",
    options: [
      "Тэгийн нэр",
      "Тэгийн агуулга",
      "Тэгт нэмэлт мэдээлэл өгөх",
      "CSS загвар"
    ],
    correctAnswer: 2
  },
  {
    id: 12,
    text: "Оролтын талбар үүсгэх тэг аль нь вэ?",
    options: [
      "<input>",
      "<textfield>",
      "<type>",
      "<form>"
    ],
    correctAnswer: 0
  },
  {
    id: 13,
    text: "Товчлуур үүсгэх тэг аль нь вэ?",
    options: [
      "<button>",
      "<btn>",
      "<click>",
      "<input type='button'>"
    ],
    correctAnswer: 0
  },
  {
    id: 14,
    text: "Div тэг нь ямар зориулалттай вэ?",
    options: [
      "Зураг оруулах",
      "Блок элемент үүсгэх",
      "Холбоос үүсгэх",
      "Гарчиг үүсгэх"
    ],
    correctAnswer: 1
  },
  {
    id: 15,
    text: "HTML-д өнгө тодорхойлох зөв арга аль нь биш вэ?",
    options: [
      "red",
      "#FF0000",
      "rgb(255,0,0)",
      "color(255,0,0)"
    ],
    correctAnswer: 3
  },
  {
    id: 16,
    text: "CSS нь юуны товчлол вэ?",
    options: [
      "Creative Style Sheets",
      "Cascading Style Sheets",
      "Computer Style Sheets",
      "Colorful Style Sheets"
    ],
    correctAnswer: 1
  },
  {
    id: 17,
    text: "CSS-г HTML-тэй хэрхэн холбох вэ?",
    options: [
      "<link rel='stylesheet' href='...'>",
      "<style src='...'>",
      "<css link='...'>",
      "<stylesheet>...</stylesheet>"
    ],
    correctAnswer: 0
  },
  {
    id: 18,
    text: "CSS-д class selector-ыг хэрхэн тодорхойлох вэ?",
    options: [
      "#classname",
      ".classname",
      "*classname",
      "classname"
    ],
    correctAnswer: 1
  },
  {
    id: 19,
    text: "CSS-д ID selector-ыг хэрхэн тодорхойлох вэ?",
    options: [
      ".idname",
      "*idname",
      "#idname",
      "idname"
    ],
    correctAnswer: 2
  },
  {
    id: 20,
    text: "CSS-д текстийн өнгө өөрчлөх property аль нь вэ?",
    options: [
      "text-color",
      "font-color",
      "color",
      "text-style"
    ],
    correctAnswer: 2
  },
  {
    id: 21,
    text: "CSS-д арын өнгө тохируулах property аль нь вэ?",
    options: [
      "bg-color",
      "background-color",
      "color-background",
      "back-color"
    ],
    correctAnswer: 1
  },
  {
    id: 22,
    text: "CSS-д текстийг төвлөрүүлэх утга аль нь вэ?",
    options: [
      "text-align: center",
      "align: center",
      "text: center",
      "center-align"
    ],
    correctAnswer: 0
  },
  {
    id: 23,
    text: "CSS-д хүрээ (border) үүсгэх property аль нь вэ?",
    options: [
      "line",
      "border",
      "outline",
      "frame"
    ],
    correctAnswer: 1
  },
  {
    id: 24,
    text: "CSS box model-д багтдаггүй хэсэг аль нь вэ?",
    options: [
      "Content",
      "Padding",
      "Border",
      "Background"
    ],
    correctAnswer: 3
  },
  {
    id: 25,
    text: "CSS-д гадна зай тохируулах property аль нь вэ?",
    options: [
      "padding",
      "spacing",
      "margin",
      "border-spacing"
    ],
    correctAnswer: 2
  },
  {
    id: 26,
    text: "CSS-д элементийг харагдахгүй болгох утга аль нь вэ?",
    options: [
      "display: none",
      "visibility: hidden",
      "hide: true",
      "show: false"
    ],
    correctAnswer: 0
  },
  {
    id: 27,
    text: "CSS-д фонтын хэмжээ тохируулах property аль нь вэ?",
    options: [
      "text-size",
      "font-size",
      "size",
      "text-style"
    ],
    correctAnswer: 1
  },
  {
    id: 28,
    text: "CSS-д фонтын төрөл сонгох property аль нь вэ?",
    options: [
      "font-type",
      "font-style",
      "font-family",
      "typeface"
    ],
    correctAnswer: 2
  },
  {
    id: 29,
    text: "CSS-д текстийг зузаан болгох утга аль нь вэ?",
    options: [
      "font-weight: bold",
      "text-weight: bold",
      "font-style: bold",
      "text-bold: true"
    ],
    correctAnswer: 0
  },
  {
    id: 30,
    text: "RGB өнгөний загварт хамгийн их утга аль нь вэ?",
    options: [
      "100",
      "255",
      "1000",
      "999"
    ],
    correctAnswer: 1
  }
];

export const variantB: Question[] = [
  {
    id: 1,
    text: "HTML баримт бичгийн үндсэн бүтцэд багтдаггүй тэг аль нь вэ?",
    options: [
      "<html>",
      "<head>",
      "<body>",
      "<footer>"
    ],
    correctAnswer: 3
  },
  {
    id: 2,
    text: "Хамгийн жижиг гарчиг үүсгэх тэг аль нь вэ?",
    options: [
      "<h1>",
      "<h6>",
      "<small>",
      "<mini>"
    ],
    correctAnswer: 1
  },
  {
    id: 3,
    text: "Параграф үүсгэх тэг аль нь вэ?",
    options: [
      "<p>",
      "<text>",
      "<para>",
      "<pg>"
    ],
    correctAnswer: 0
  },
  {
    id: 4,
    text: "Налуу бичвэр үүсгэх тэг аль нь вэ?",
    options: [
      "<i>",
      "<em>",
      "<slant>",
      "a болон b хоёулаа зөв"
    ],
    correctAnswer: 3
  },
  {
    id: 5,
    text: "HTML хуудасны гарчиг тохируулах тэг аль нь вэ?",
    options: [
      "<title>",
      "<head>",
      "<meta>",
      "<header>"
    ],
    correctAnswer: 0
  },
  {
    id: 6,
    text: "Хүснэгтийн мөр үүсгэх тэг аль нь вэ?",
    options: [
      "<tr>",
      "<td>",
      "<th>",
      "<row>"
    ],
    correctAnswer: 0
  },
  {
    id: 7,
    text: "Хүснэгтийн нүд үүсгэх тэг аль нь вэ?",
    options: [
      "<td>",
      "<tr>",
      "<cell>",
      "<th>"
    ],
    correctAnswer: 0
  },
  {
    id: 8,
    text: "Дугаарлалгүй жагсаалт үүсгэх тэг аль нь вэ?",
    options: [
      "<ul>",
      "<ol>",
      "<li>",
      "<list>"
    ],
    correctAnswer: 0
  },
  {
    id: 9,
    text: "Холбоосны хаяг заах аттрибут аль нь вэ?",
    options: [
      "src",
      "link",
      "href",
      "url"
    ],
    correctAnswer: 2
  },
  {
    id: 10,
    text: "Зургийн эх үүсвэр заах аттрибут аль нь вэ?",
    options: [
      "href",
      "src",
      "link",
      "image"
    ],
    correctAnswer: 1
  },
  {
    id: 11,
    text: "HTML5-д шинээр нэмэгдсэн тэг аль нь вэ?",
    options: [
      "<article>",
      "<div>",
      "<span>",
      "<b>"
    ],
    correctAnswer: 0
  },
  {
    id: 12,
    text: "Маягт (form) үүсгэх тэг аль нь вэ?",
    options: [
      "<form>",
      "<input>",
      "<submit>",
      "<data>"
    ],
    correctAnswer: 0
  },
  {
    id: 13,
    text: "Сонгох хайрцаг үүсгэх input төрөл аль нь вэ?",
    options: [
      "type='box'",
      "type='select'",
      "type='checkbox'",
      "type='check'"
    ],
    correctAnswer: 2
  },
  {
    id: 14,
    text: "Span тэг нь ямар төрлийн элемент вэ?",
    options: [
      "Block",
      "Inline",
      "Table",
      "List"
    ],
    correctAnswer: 1
  },
  {
    id: 15,
    text: "HEX өнгөний кодын зөв формат аль нь вэ?",
    options: [
      "#GGGGGG",
      "#12345",
      "#ABCDEF",
      "ABCDEF"
    ],
    correctAnswer: 2
  },
  {
    id: 16,
    text: "CSS-г хуудсанд оруулах гурван арга байдаг. Аль нь биш вэ?",
    options: [
      "Inline",
      "Internal",
      "External",
      "Imported"
    ],
    correctAnswer: 3
  },
  {
    id: 17,
    text: "CSS-д бүх элементийг сонгох universal selector аль нь вэ?",
    options: [
      "+",
      "*",
      "#",
      "."
    ],
    correctAnswer: 1
  },
  {
    id: 18,
    text: "CSS-д element selector-ыг хэрхэн бичих вэ?",
    options: [
      ".element",
      "#element",
      "element",
      "*element"
    ],
    correctAnswer: 2
  },
  {
    id: 19,
    text: "CSS-д хэд хэдэн class-тай элемент үүсгэж болох уу?",
    options: [
      "Үгүй, зөвхөн 1",
      "Тийм, олон class өгч болно",
      "Зөвхөн 2",
      "Зөвхөн 3"
    ],
    correctAnswer: 1
  },
  {
    id: 20,
    text: "CSS-д фонтын загвар өөрчлөх property аль нь вэ?",
    options: [
      "font-style",
      "text-style",
      "font-type",
      "style"
    ],
    correctAnswer: 0
  },
  {
    id: 21,
    text: "CSS-д арын зургийн хаяг заах property аль нь вэ?",
    options: [
      "background-img",
      "bg-image",
      "background-image",
      "image"
    ],
    correctAnswer: 2
  },
  {
    id: 22,
    text: "CSS-д текстийн чимэглэл нэмэх property аль нь вэ?",
    options: [
      "text-decoration",
      "text-style",
      "decoration",
      "style"
    ],
    correctAnswer: 0
  },
  {
    id: 23,
    text: "CSS-д хүрээний өргөн тохируулах property аль нь вэ?",
    options: [
      "border-size",
      "border-width",
      "border-weight",
      "border-thick"
    ],
    correctAnswer: 1
  },
  {
    id: 24,
    text: "CSS box model-ийн дараалал зөв заасан хувилбар аль нь вэ?",
    options: [
      "Content-Border-Padding-Margin",
      "Content-Padding-Border-Margin",
      "Margin-Border-Padding-Content",
      "Content-Margin-Padding-Border"
    ],
    correctAnswer: 1
  },
  {
    id: 25,
    text: "CSS-д дотоод зай тохируулах property аль нь вэ?",
    options: [
      "spacing",
      "margin",
      "padding",
      "indent"
    ],
    correctAnswer: 2
  },
  {
    id: 26,
    text: "CSS-д элементийг харагдахгүй болгох боловч зай эзлүүлэх утга аль нь вэ?",
    options: [
      "display: none",
      "visibility: hidden",
      "hide: true",
      "opacity: 0"
    ],
    correctAnswer: 1
  },
  {
    id: 27,
    text: "CSS-д текстийн мөр хоорондын зай тохируулах property аль нь вэ?",
    options: [
      "line-height",
      "text-height",
      "spacing",
      "line-spacing"
    ],
    correctAnswer: 0
  },
  {
    id: 28,
    text: "CSS-д фонтын жин (weight) тохируулах property аль нь вэ?",
    options: [
      "font-weight",
      "text-weight",
      "weight",
      "font-size"
    ],
    correctAnswer: 0
  },
  {
    id: 29,
    text: "CSS-д текстийг жижиг үсгээр харуулах утга аль нь вэ?",
    options: [
      "text-transform: lowercase",
      "text-case: lower",
      "font-case: small",
      "text-style: lower"
    ],
    correctAnswer: 0
  },
  {
    id: 30,
    text: "RGBA өнгөний загварт А нь юуг илэрхийлэх вэ?",
    options: [
      "Amount",
      "Alpha (тунгалаг байдал)",
      "Area",
      "Average"
    ],
    correctAnswer: 1
  }
];
