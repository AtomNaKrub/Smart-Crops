import { createSlice } from '@reduxjs/toolkit'

export const FrontEndSlice = createSlice({
  name: 'FrontEndData',
  initialState: {
    data: [
    {
        id: '1',
        title: "Little Gem Lettuce",
        images: "LittleGem",
        description: [
            "ผักกาด Little Gem เป็นพืชในตระกูลทานตะวัน",
            "ผักกาด Little Gem เป็นผักกาดที่พัฒนามาจากผักกาด Romaine lettuce และ ผักกาด Butterhead type lettuce"
        ],
        grow: [
            "แสงที่ต้องการ: 12-16 ชั่วโมงต่อวัน",
            "ดินที่ต้องใช้: ดินร่วน 100% กับกากมะพร้าว",
            "อุณหภูมิที่ต้องการ: 21-29 °C",
            "การรดน้ำ: วันละ2ครั้ง (งดรดน้ำช่วงฤดูหนาว)",
            "ขนาดโตเต็มที่: สูง 30cm กว้าง 10cm",
        ],
        soilMoisture: '1300',
        airHumidity: '75'
      },
      {
        id: '2',
        title: "Butterhead Lettuce",
        images: "Butterhead",
        description: [
            "ผักกาด Butterhead ได้ชื่อมาจากการที่มีขนาดเล็กและมีรสชาติคล้ายเนยเล็กน้อย",
            "ผักกาด Butterhead รูปร่างหน้าตาเหมือนผักกาดทั่วไปส่วนใหญ่"
        ],
        grow: [
            "แสงที่ต้องการ: 12-16 ชั่วโมงต่อวัน",
            "ดินที่ต้องใช้: ดินร่วน 100% กับกากมะพร้าว",
            "อุณหภูมิที่ต้องการ: 21-26 °C",
            "การรดน้ำ: วันละ2ครั้ง (ให้ชุ่มชื้นตลอดเวลา)",
            "ขนาดโตเต็มที่: สูง 30cm กว้าง 30cm",
        ],
        soilMoisture: '1100',
        airHumidity: '60'
      },
      {
        id: '3',
        title: "Green Oak Lettuce",
        images: "GreenOak",
        description: [
            "ผักกาด Green Oak เป็นผักที่นิยมใช้ทำสลัด",
            "มีใบสีเขียวยาวและมีลักษณะเป็นพุ่ม"
        ],
        grow: [
            "แสงที่ต้องการ: 12-16 ชั่วโมงต่อวัน",
            "ดินที่ต้องใช้: ดินร่วน 100% กับกากมะพร้าว",
            "อุณหภูมิที่ต้องการ: 21-26 °C",
            "การรดน้ำ: วันละ2ครั้ง (ให้ชุ่มชื้นตลอดเวลา)",
            "ขนาดโตเต็มที่: สูง 30cm กว้าง 20cm",
        ],
        soilMoisture: '1200',
        airHumidity: '65'
      },
      {
        id: '4',
        title: "Red Oak Lettuce",
        images: "RedOak",
        description: [
            "ผักกาด Red Oak เป็นผักที่นิยมใช้ทำสลัด",
            "มีใบสีเขียวและมีสีออกแดงที่ปลายใบ"
        ],
        grow: [
            "แสงที่ต้องการ: 12-16 ชั่วโมงต่อวัน",
            "ดินที่ต้องใช้: ดินร่วน 100% กับกากมะพร้าว",
            "อุณหภูมิที่ต้องการ: 21-26 °C",
            "การรดน้ำ: วันละ2ครั้ง (งดรดน้ำช่วงฤดูหนาว)",
            "ขนาดโตเต็มที่: สูง 30cm กว้าง 20cm",
        ],
        soilMoisture: '1200',
        airHumidity: '65'
      },
      {
        id: '5',
        title: "Romaine Lettuce",
        images: "Romaine",
        description: [
            "ผักกาด Romaine หรืออีกชื่อนึงคือผักกาด Cos",
            "มีใบสีเขียวยาว กรอบ มีรสชาติขมเล็กน้อย"
        ],
        grow: [
            "แสงที่ต้องการ: 12-16 ชั่วโมงต่อวัน",
            "ดินที่ต้องใช้: ดินร่วน 100% กับกากมะพร้าว",
            "อุณหภูมิที่ต้องการ: 21-26 °C",
            "การรดน้ำ: วันละ2ครั้ง (ให้ชุ่มชื้นตลอดเวลา)",
            "ขนาดโตเต็มที่: สูง 30cm กว้าง 20cm",
        ],
        soilMoisture: '1300',
        airHumidity: '75'
      },
  ]},
  reducers: {
    
  },
})

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = FrontEndSlice.actions
