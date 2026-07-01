/* ======================================================================
   미국 50주 데이터 — 출처: 나무위키 [미국/주]
   (가입일·순서·주도·최대도시·면적·인구 2020·하원의석)
   별명(nicknameKo)은 각 주의 공식 별명. FIPS는 us-atlas TopoJSON 조인 키.
   ====================================================================== */

export type USState = {
  fips: string; // 2자리 FIPS — TopoJSON geometry id와 조인 (예: "06" = 캘리포니아)
  abbr: string; // 우편 약자 (CA)
  nameKo: string; // 캘리포니아
  nameEn: string; // California
  admissionDate: string; // ISO 날짜 (1850-09-09)
  admissionOrder: number; // 가입 순서 1~50
  capitalKo: string;
  capitalEn: string;
  largestCityKo: string;
  largestCityEn: string;
  areaKm2: number; // 면적 (km², 내수면 제외)
  population2020: number; // 2020 인구조사
  houseSeats: number; // 연방 하원 의석수
  region: string; // 인구조사 구역(한글, namu 분류)
  nicknameKo: string; // 주 공식 별명
};

export const states: USState[] = [
  {
    fips: "10", abbr: "DE", nameKo: "델라웨어", nameEn: "Delaware",
    admissionDate: "1787-12-07", admissionOrder: 1,
    capitalKo: "도버", capitalEn: "Dover",
    largestCityKo: "윌밍턴", largestCityEn: "Wilmington",
    areaKm2: 5046.7, population2020: 989948, houseSeats: 1,
    region: "남부 대서양", nicknameKo: "첫 번째 주",
  },
  {
    fips: "42", abbr: "PA", nameKo: "펜실베이니아", nameEn: "Pennsylvania",
    admissionDate: "1787-12-12", admissionOrder: 2,
    capitalKo: "해리스버그", capitalEn: "Harrisburg",
    largestCityKo: "필라델피아", largestCityEn: "Philadelphia",
    areaKm2: 115883.06, population2020: 13002700, houseSeats: 17,
    region: "중부 대서양", nicknameKo: "쐐기의 주",
  },
  {
    fips: "34", abbr: "NJ", nameKo: "뉴저지", nameEn: "New Jersey",
    admissionDate: "1787-12-18", admissionOrder: 3,
    capitalKo: "트렌턴", capitalEn: "Trenton",
    largestCityKo: "뉴어크", largestCityEn: "Newark",
    areaKm2: 19047.34, population2020: 9288994, houseSeats: 12,
    region: "중부 대서양", nicknameKo: "정원의 주",
  },
  {
    fips: "13", abbr: "GA", nameKo: "조지아", nameEn: "Georgia",
    admissionDate: "1788-01-02", admissionOrder: 4,
    capitalKo: "애틀랜타", capitalEn: "Atlanta",
    largestCityKo: "애틀랜타", largestCityEn: "Atlanta",
    areaKm2: 148959.26, population2020: 10711908, houseSeats: 14,
    region: "남부 대서양", nicknameKo: "복숭아의 주",
  },
  {
    fips: "09", abbr: "CT", nameKo: "코네티컷", nameEn: "Connecticut",
    admissionDate: "1788-01-09", admissionOrder: 5,
    capitalKo: "하트퍼드", capitalEn: "Hartford",
    largestCityKo: "브리지포트", largestCityEn: "Bridgeport",
    areaKm2: 12541.65, population2020: 3605944, houseSeats: 5,
    region: "뉴잉글랜드", nicknameKo: "헌법의 주",
  },
  {
    fips: "25", abbr: "MA", nameKo: "매사추세츠", nameEn: "Massachusetts",
    admissionDate: "1788-02-06", admissionOrder: 6,
    capitalKo: "보스턴", capitalEn: "Boston",
    largestCityKo: "보스턴", largestCityEn: "Boston",
    areaKm2: 20202.06, population2020: 7029917, houseSeats: 9,
    region: "뉴잉글랜드", nicknameKo: "만(灣)의 주",
  },
  {
    fips: "24", abbr: "MD", nameKo: "메릴랜드", nameEn: "Maryland",
    admissionDate: "1788-04-28", admissionOrder: 7,
    capitalKo: "아나폴리스", capitalEn: "Annapolis",
    largestCityKo: "볼티모어", largestCityEn: "Baltimore",
    areaKm2: 25141.64, population2020: 6177224, houseSeats: 8,
    region: "남부 대서양", nicknameKo: "옛 전선의 주",
  },
  {
    fips: "45", abbr: "SC", nameKo: "사우스캐롤라이나", nameEn: "South Carolina",
    admissionDate: "1788-05-23", admissionOrder: 8,
    capitalKo: "컬럼비아", capitalEn: "Columbia",
    largestCityKo: "찰스턴", largestCityEn: "Charleston",
    areaKm2: 77856.86, population2020: 5118425, houseSeats: 7,
    region: "남부 대서양", nicknameKo: "팔메토의 주",
  },
  {
    fips: "33", abbr: "NH", nameKo: "뉴햄프셔", nameEn: "New Hampshire",
    admissionDate: "1788-06-21", admissionOrder: 9,
    capitalKo: "콩코드", capitalEn: "Concord",
    largestCityKo: "맨체스터", largestCityEn: "Manchester",
    areaKm2: 23187.26, population2020: 1377529, houseSeats: 2,
    region: "뉴잉글랜드", nicknameKo: "화강암의 주",
  },
  {
    fips: "51", abbr: "VA", nameKo: "버지니아", nameEn: "Virginia",
    admissionDate: "1788-06-25", admissionOrder: 10,
    capitalKo: "리치먼드", capitalEn: "Richmond",
    largestCityKo: "버지니아비치", largestCityEn: "Virginia Beach",
    areaKm2: 102278.86, population2020: 8631393, houseSeats: 11,
    region: "남부 대서양", nicknameKo: "옛 자치령",
  },
  {
    fips: "36", abbr: "NY", nameKo: "뉴욕", nameEn: "New York",
    admissionDate: "1788-07-26", admissionOrder: 11,
    capitalKo: "올버니", capitalEn: "Albany",
    largestCityKo: "뉴욕", largestCityEn: "New York",
    areaKm2: 122056.82, population2020: 20201249, houseSeats: 26,
    region: "중부 대서양", nicknameKo: "제국의 주",
  },
  {
    fips: "37", abbr: "NC", nameKo: "노스캐롤라이나", nameEn: "North Carolina",
    admissionDate: "1789-11-21", admissionOrder: 12,
    capitalKo: "랄리", capitalEn: "Raleigh",
    largestCityKo: "샬럿", largestCityEn: "Charlotte",
    areaKm2: 125919.81, population2020: 10439388, houseSeats: 14,
    region: "남부 대서양", nicknameKo: "타힐의 주",
  },
  {
    fips: "44", abbr: "RI", nameKo: "로드아일랜드", nameEn: "Rhode Island",
    admissionDate: "1790-05-09", admissionOrder: 13,
    capitalKo: "프로비던스", capitalEn: "Providence",
    largestCityKo: "프로비던스", largestCityEn: "Providence",
    areaKm2: 2677.56, population2020: 1097379, houseSeats: 2,
    region: "뉴잉글랜드", nicknameKo: "바다의 주",
  },
  {
    fips: "50", abbr: "VT", nameKo: "버몬트", nameEn: "Vermont",
    admissionDate: "1791-03-04", admissionOrder: 14,
    capitalKo: "몬트필리어", capitalEn: "Montpelier",
    largestCityKo: "벌링턴", largestCityEn: "Burlington",
    areaKm2: 23871.04, population2020: 643077, houseSeats: 1,
    region: "뉴잉글랜드", nicknameKo: "청산의 주",
  },
  {
    fips: "21", abbr: "KY", nameKo: "켄터키", nameEn: "Kentucky",
    admissionDate: "1792-06-01", admissionOrder: 15,
    capitalKo: "프랭크퍼트", capitalEn: "Frankfort",
    largestCityKo: "루이빌", largestCityEn: "Louisville",
    areaKm2: 102269.15, population2020: 4505836, houseSeats: 6,
    region: "동남 중앙", nicknameKo: "블루그래스의 주",
  },
  {
    fips: "47", abbr: "TN", nameKo: "테네시", nameEn: "Tennessee",
    admissionDate: "1796-06-01", admissionOrder: 16,
    capitalKo: "내슈빌", capitalEn: "Nashville",
    largestCityKo: "내슈빌", largestCityEn: "Nashville",
    areaKm2: 106797.9, population2020: 6910840, houseSeats: 9,
    region: "동남 중앙", nicknameKo: "자원봉사의 주",
  },
  {
    fips: "39", abbr: "OH", nameKo: "오하이오", nameEn: "Ohio",
    admissionDate: "1803-03-01", admissionOrder: 17,
    capitalKo: "콜럼버스", capitalEn: "Columbus",
    largestCityKo: "콜럼버스", largestCityEn: "Columbus",
    areaKm2: 105828.7, population2020: 11799448, houseSeats: 15,
    region: "동북 중앙", nicknameKo: "버키아이의 주",
  },
  {
    fips: "22", abbr: "LA", nameKo: "루이지애나", nameEn: "Louisiana",
    admissionDate: "1812-04-30", admissionOrder: 18,
    capitalKo: "배턴루지", capitalEn: "Baton Rouge",
    largestCityKo: "뉴올리언스", largestCityEn: "New Orleans",
    areaKm2: 111897.59, population2020: 4657757, houseSeats: 6,
    region: "서남 중앙", nicknameKo: "펠리컨의 주",
  },
  {
    fips: "18", abbr: "IN", nameKo: "인디애나", nameEn: "Indiana",
    admissionDate: "1816-12-11", admissionOrder: 19,
    capitalKo: "인디애나폴리스", capitalEn: "Indianapolis",
    largestCityKo: "인디애나폴리스", largestCityEn: "Indianapolis",
    areaKm2: 92789.2, population2020: 6785528, houseSeats: 9,
    region: "동북 중앙", nicknameKo: "후지어의 주",
  },
  {
    fips: "28", abbr: "MS", nameKo: "미시시피", nameEn: "Mississippi",
    admissionDate: "1817-12-10", admissionOrder: 20,
    capitalKo: "잭슨", capitalEn: "Jackson",
    largestCityKo: "잭슨", largestCityEn: "Jackson",
    areaKm2: 121530.71, population2020: 2961279, houseSeats: 4,
    region: "동남 중앙", nicknameKo: "목련의 주",
  },
  {
    fips: "17", abbr: "IL", nameKo: "일리노이", nameEn: "Illinois",
    admissionDate: "1818-12-03", admissionOrder: 21,
    capitalKo: "스프링필드", capitalEn: "Springfield",
    largestCityKo: "시카고", largestCityEn: "Chicago",
    areaKm2: 143793.37, population2020: 12812508, houseSeats: 17,
    region: "동북 중앙", nicknameKo: "대초원의 주",
  },
  {
    fips: "01", abbr: "AL", nameKo: "앨라배마", nameEn: "Alabama",
    admissionDate: "1819-12-14", admissionOrder: 22,
    capitalKo: "몽고메리", capitalEn: "Montgomery",
    largestCityKo: "버밍햄", largestCityEn: "Birmingham",
    areaKm2: 131170.8, population2020: 5024279, houseSeats: 7,
    region: "동남 중앙", nicknameKo: "옐로햄머의 주",
  },
  {
    fips: "23", abbr: "ME", nameKo: "메인", nameEn: "Maine",
    admissionDate: "1820-03-15", admissionOrder: 23,
    capitalKo: "오거스타", capitalEn: "Augusta",
    largestCityKo: "포틀랜드", largestCityEn: "Portland",
    areaKm2: 79882.79, population2020: 1362359, houseSeats: 2,
    region: "뉴잉글랜드", nicknameKo: "소나무의 주",
  },
  {
    fips: "29", abbr: "MO", nameKo: "미주리", nameEn: "Missouri",
    admissionDate: "1821-08-10", admissionOrder: 24,
    capitalKo: "제퍼슨시티", capitalEn: "Jefferson City",
    largestCityKo: "캔자스시티", largestCityEn: "Kansas City",
    areaKm2: 178039.72, population2020: 6154913, houseSeats: 8,
    region: "서북 중앙", nicknameKo: "쇼미의 주",
  },
  {
    fips: "05", abbr: "AR", nameKo: "아칸소", nameEn: "Arkansas",
    admissionDate: "1836-06-15", admissionOrder: 25,
    capitalKo: "리틀록", capitalEn: "Little Rock",
    largestCityKo: "리틀록", largestCityEn: "Little Rock",
    areaKm2: 134771.27, population2020: 3011524, houseSeats: 4,
    region: "서남 중앙", nicknameKo: "자연의 주",
  },
  {
    fips: "26", abbr: "MI", nameKo: "미시간", nameEn: "Michigan",
    admissionDate: "1837-01-26", admissionOrder: 26,
    capitalKo: "랜싱", capitalEn: "Lansing",
    largestCityKo: "디트로이트", largestCityEn: "Detroit",
    areaKm2: 146435.08, population2020: 10077331, houseSeats: 13,
    region: "동북 중앙", nicknameKo: "오대호의 주",
  },
  {
    fips: "12", abbr: "FL", nameKo: "플로리다", nameEn: "Florida",
    admissionDate: "1845-03-03", admissionOrder: 27,
    capitalKo: "탤러해시", capitalEn: "Tallahassee",
    largestCityKo: "잭슨빌", largestCityEn: "Jacksonville",
    areaKm2: 138887.48, population2020: 21538187, houseSeats: 28,
    region: "남부 대서양", nicknameKo: "햇살의 주",
  },
  {
    fips: "48", abbr: "TX", nameKo: "텍사스", nameEn: "Texas",
    admissionDate: "1845-12-29", admissionOrder: 28,
    capitalKo: "오스틴", capitalEn: "Austin",
    largestCityKo: "휴스턴", largestCityEn: "Houston",
    areaKm2: 676587.02, population2020: 29145505, houseSeats: 38,
    region: "서남 중앙", nicknameKo: "외로운 별의 주",
  },
  {
    fips: "19", abbr: "IA", nameKo: "아이오와", nameEn: "Iowa",
    admissionDate: "1846-12-28", admissionOrder: 29,
    capitalKo: "디모인", capitalEn: "Des Moines",
    largestCityKo: "디모인", largestCityEn: "Des Moines",
    areaKm2: 144669.3, population2020: 3190369, houseSeats: 4,
    region: "서북 중앙", nicknameKo: "매의 눈의 주",
  },
  {
    fips: "55", abbr: "WI", nameKo: "위스콘신", nameEn: "Wisconsin",
    admissionDate: "1848-05-29", admissionOrder: 30,
    capitalKo: "매디슨", capitalEn: "Madison",
    largestCityKo: "밀워키", largestCityEn: "Milwaukee",
    areaKm2: 140268.06, population2020: 5893718, houseSeats: 8,
    region: "동북 중앙", nicknameKo: "오소리의 주",
  },
  {
    fips: "06", abbr: "CA", nameKo: "캘리포니아", nameEn: "California",
    admissionDate: "1850-09-09", admissionOrder: 31,
    capitalKo: "새크라멘토", capitalEn: "Sacramento",
    largestCityKo: "로스앤젤레스", largestCityEn: "Los Angeles",
    areaKm2: 403466.31, population2020: 39538223, houseSeats: 52,
    region: "태평양", nicknameKo: "황금의 주",
  },
  {
    fips: "27", abbr: "MN", nameKo: "미네소타", nameEn: "Minnesota",
    admissionDate: "1858-05-11", admissionOrder: 32,
    capitalKo: "세인트폴", capitalEn: "Saint Paul",
    largestCityKo: "미니애폴리스", largestCityEn: "Minneapolis",
    areaKm2: 206232.31, population2020: 5706494, houseSeats: 8,
    region: "서북 중앙", nicknameKo: "북극성의 주",
  },
  {
    fips: "41", abbr: "OR", nameKo: "오리건", nameEn: "Oregon",
    admissionDate: "1859-02-14", admissionOrder: 33,
    capitalKo: "세일럼", capitalEn: "Salem",
    largestCityKo: "포틀랜드", largestCityEn: "Portland",
    areaKm2: 248607.8, population2020: 4237256, houseSeats: 6,
    region: "태평양", nicknameKo: "비버의 주",
  },
  {
    fips: "20", abbr: "KS", nameKo: "캔자스", nameEn: "Kansas",
    admissionDate: "1861-01-29", admissionOrder: 34,
    capitalKo: "토피카", capitalEn: "Topeka",
    largestCityKo: "위치타", largestCityEn: "Wichita",
    areaKm2: 211754.11, population2020: 2937880, houseSeats: 4,
    region: "서북 중앙", nicknameKo: "해바라기의 주",
  },
  {
    fips: "54", abbr: "WV", nameKo: "웨스트버지니아", nameEn: "West Virginia",
    admissionDate: "1863-06-20", admissionOrder: 35,
    capitalKo: "찰스턴", capitalEn: "Charleston",
    largestCityKo: "찰스턴", largestCityEn: "Charleston",
    areaKm2: 62258.68, population2020: 1793716, houseSeats: 2,
    region: "남부 대서양", nicknameKo: "산악의 주",
  },
  {
    fips: "32", abbr: "NV", nameKo: "네바다", nameEn: "Nevada",
    admissionDate: "1864-10-31", admissionOrder: 36,
    capitalKo: "카슨시티", capitalEn: "Carson City",
    largestCityKo: "라스베이거스", largestCityEn: "Las Vegas",
    areaKm2: 284331.95, population2020: 3104614, houseSeats: 4,
    region: "산악", nicknameKo: "은의 주",
  },
  {
    fips: "31", abbr: "NE", nameKo: "네브래스카", nameEn: "Nebraska",
    admissionDate: "1867-03-01", admissionOrder: 37,
    capitalKo: "링컨", capitalEn: "Lincoln",
    largestCityKo: "오마하", largestCityEn: "Omaha",
    areaKm2: 198973.69, population2020: 1961504, houseSeats: 3,
    region: "서북 중앙", nicknameKo: "옥수수 까는 주",
  },
  {
    fips: "08", abbr: "CO", nameKo: "콜로라도", nameEn: "Colorado",
    admissionDate: "1876-08-01", admissionOrder: 38,
    capitalKo: "덴버", capitalEn: "Denver",
    largestCityKo: "덴버", largestCityEn: "Denver",
    areaKm2: 268431.26, population2020: 5773714, houseSeats: 8,
    region: "산악", nicknameKo: "백년의 주",
  },
  {
    fips: "38", abbr: "ND", nameKo: "노스다코타", nameEn: "North Dakota",
    admissionDate: "1889-11-02", admissionOrder: 39,
    capitalKo: "비즈마크", capitalEn: "Bismarck",
    largestCityKo: "파고", largestCityEn: "Fargo",
    areaKm2: 178711.25, population2020: 779094, houseSeats: 1,
    region: "서북 중앙", nicknameKo: "평화의 정원 주",
  },
  {
    fips: "46", abbr: "SD", nameKo: "사우스다코타", nameEn: "South Dakota",
    admissionDate: "1889-11-02", admissionOrder: 40,
    capitalKo: "피어", capitalEn: "Pierre",
    largestCityKo: "수폴스", largestCityEn: "Sioux Falls",
    areaKm2: 196349.59, population2020: 886667, houseSeats: 1,
    region: "서북 중앙", nicknameKo: "러시모어 산의 주",
  },
  {
    fips: "30", abbr: "MT", nameKo: "몬태나", nameEn: "Montana",
    admissionDate: "1889-11-08", admissionOrder: 41,
    capitalKo: "헬레나", capitalEn: "Helena",
    largestCityKo: "빌링스", largestCityEn: "Billings",
    areaKm2: 376961.89, population2020: 1084225, houseSeats: 2,
    region: "산악", nicknameKo: "보물의 주",
  },
  {
    fips: "53", abbr: "WA", nameKo: "워싱턴", nameEn: "Washington",
    admissionDate: "1889-11-11", admissionOrder: 42,
    capitalKo: "올림피아", capitalEn: "Olympia",
    largestCityKo: "시애틀", largestCityEn: "Seattle",
    areaKm2: 172119.01, population2020: 7705281, houseSeats: 10,
    region: "태평양", nicknameKo: "상록의 주",
  },
  {
    fips: "16", abbr: "ID", nameKo: "아이다호", nameEn: "Idaho",
    admissionDate: "1890-07-03", admissionOrder: 43,
    capitalKo: "보이시", capitalEn: "Boise",
    largestCityKo: "보이시", largestCityEn: "Boise",
    areaKm2: 214044.7, population2020: 1839106, houseSeats: 2,
    region: "산악", nicknameKo: "보석의 주",
  },
  {
    fips: "56", abbr: "WY", nameKo: "와이오밍", nameEn: "Wyoming",
    admissionDate: "1890-07-10", admissionOrder: 44,
    capitalKo: "샤이엔", capitalEn: "Cheyenne",
    largestCityKo: "샤이엔", largestCityEn: "Cheyenne",
    areaKm2: 251470.08, population2020: 576851, houseSeats: 1,
    region: "산악", nicknameKo: "평등의 주",
  },
  {
    fips: "49", abbr: "UT", nameKo: "유타", nameEn: "Utah",
    admissionDate: "1896-01-04", admissionOrder: 45,
    capitalKo: "솔트레이크시티", capitalEn: "Salt Lake City",
    largestCityKo: "솔트레이크시티", largestCityEn: "Salt Lake City",
    areaKm2: 212818.34, population2020: 3271616, houseSeats: 4,
    region: "산악", nicknameKo: "벌집의 주",
  },
  {
    fips: "40", abbr: "OK", nameKo: "오클라호마", nameEn: "Oklahoma",
    admissionDate: "1907-11-16", admissionOrder: 46,
    capitalKo: "오클라호마시티", capitalEn: "Oklahoma City",
    largestCityKo: "오클라호마시티", largestCityEn: "Oklahoma City",
    areaKm2: 177660.03, population2020: 3959353, houseSeats: 5,
    region: "서남 중앙", nicknameKo: "수너의 주",
  },
  {
    fips: "35", abbr: "NM", nameKo: "뉴멕시코", nameEn: "New Mexico",
    admissionDate: "1912-01-06", admissionOrder: 47,
    capitalKo: "산타페", capitalEn: "Santa Fe",
    largestCityKo: "앨버커키", largestCityEn: "Albuquerque",
    areaKm2: 314160.77, population2020: 2117522, houseSeats: 3,
    region: "산악", nicknameKo: "매혹의 땅",
  },
  {
    fips: "04", abbr: "AZ", nameKo: "애리조나", nameEn: "Arizona",
    admissionDate: "1912-02-14", admissionOrder: 48,
    capitalKo: "피닉스", capitalEn: "Phoenix",
    largestCityKo: "피닉스", largestCityEn: "Phoenix",
    areaKm2: 294207.32, population2020: 7151502, houseSeats: 9,
    region: "산악", nicknameKo: "그랜드캐니언의 주",
  },
  {
    fips: "02", abbr: "AK", nameKo: "알래스카", nameEn: "Alaska",
    admissionDate: "1959-01-03", admissionOrder: 49,
    capitalKo: "주노", capitalEn: "Juneau",
    largestCityKo: "앵커리지", largestCityEn: "Anchorage",
    areaKm2: 1477953.28, population2020: 733391, houseSeats: 1,
    region: "본토 외부주", nicknameKo: "마지막 국경",
  },
  {
    fips: "15", abbr: "HI", nameKo: "하와이", nameEn: "Hawaii",
    admissionDate: "1959-08-21", admissionOrder: 50,
    capitalKo: "호놀룰루", capitalEn: "Honolulu",
    largestCityKo: "호놀룰루", largestCityEn: "Honolulu",
    areaKm2: 16634.54, population2020: 1455271, houseSeats: 2,
    region: "본토 외부주", nicknameKo: "알로하 주",
  },
];

/** 가입 순서 오름차순 (배열 자체가 이미 순서대로지만 명시적으로 보장) */
export const statesByAdmission: USState[] = [...states].sort(
  (a, b) => a.admissionOrder - b.admissionOrder,
);

/** FIPS 코드(문자열 2자리) → USState, TopoJSON geometry id와 조인 */
export const byFips: Map<string, USState> = new Map(
  states.map((s) => [s.fips, s]),
);

/** 우편 약자 → USState */
export const byAbbr: Map<string, USState> = new Map(
  states.map((s) => [s.abbr, s]),
);

/** 전체 주 수 */
export const TOTAL_STATES = states.length; // 50

/** 타임라인 범위 — 첫 가입(델라웨어)부터 마지막(하와이) 직후까지 */
export const FIRST_ADMISSION = statesByAdmission[0].admissionDate; // 1787-12-07
export const LAST_ADMISSION =
  statesByAdmission[statesByAdmission.length - 1].admissionDate; // 1959-08-21

/** 재생 슬라이더용 epoch ms — 첫 가입일 ~ 하와이 가입 직후(1960-01-01) */
export const TIMELINE_START = Date.parse(`${FIRST_ADMISSION}T00:00:00Z`);
export const TIMELINE_END = Date.parse("1960-01-01T00:00:00Z");

/** 가입일 epoch ms (오름차순) — "이전/다음 가입" 점프용 */
export const admissionMs: { abbr: string; ms: number; nameKo: string; order: number }[] = statesByAdmission
  .map((s) => ({
    abbr: s.abbr,
    ms: Date.parse(`${s.admissionDate}T00:00:00Z`),
    nameKo: s.nameKo,
    order: s.admissionOrder,
  }))
  .sort((a, b) => a.ms - b.ms);
