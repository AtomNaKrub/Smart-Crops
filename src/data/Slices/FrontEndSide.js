import { createSlice } from '@reduxjs/toolkit'

export const FrontEndSlice = createSlice({
  name: 'FrontEndData',
  initialState: {
    data: [
    {
        id: '1',
        title: "Kale",
        images: "Kale",
        description: [
            "Kale เป็นพืชในตระกูลทานตะวัน",
            "Kale เป็นผักกาดที่พัฒนามาจากผักกาด Romaine lettuce และ ผักกาด Butterhead type lettuce"
        ],
        grow: [
            "แสงที่ต้องการ: 12-16 ชั่วโมงต่อวัน",
            "ดินที่ต้องใช้: ดินร่วน 100% กับกากมะพร้าว",
            "อุณหภูมิที่ต้องการ: 21-29 °C",
            "การรดน้ำ: วันละ2ครั้ง (งดรดน้ำช่วงฤดูหนาว)",
            "ขนาดโตเต็มที่: สูง 30cm กว้าง 10cm",
        ],
        soilMoisture: '1300',
        airHumidity: '75',
        temperature: '50',
        Light: '7'
      },
      {
        id: '2',
        title: "Prik Hom",
        images: "PrikHom",
        description: [
            "PrikHom ได้ชื่อมาจากการที่มีขนาดเล็กและมีรสชาติคล้ายเนยเล็กน้อย",
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
        airHumidity: '60',
        temperature: '50',
        Light: '7'
      },
      {
        id: '3',
        title: "Mint",
        images: "Mint",
        description: [
            "Mint เป็นผักที่นิยมใช้ทำสลัด",
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
        airHumidity: '65',
        temperature: '50',
        Light: '7'
      },
      {
        id: '4',
        title: "Basil",
        images: "Basil",
        description: [
            "Basil เป็นผักที่นิยมใช้ทำสลัด",
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
        airHumidity: '65',
        temperature: '50',
        Light: '7'
      },
      {
        id: '5',
        title: "Holy Basil",
        images: "HolyBasil",
        description: [
            "Holy Basil หรืออีกชื่อนึงคือผักกาด Cos",
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
        airHumidity: '75',
        temperature: '50',
        Light: '7'
      },
  ]},
  reducers: {
    
  },
})

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = FrontEndSlice.actions
