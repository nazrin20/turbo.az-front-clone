// Odometer, Price yazmayın

const data = [
    {
      brand: "Abarth",
      model: "Seltos",
      banType: "Offroader / SUV",
      odometer: 30000,
      odometerUnit: "km",
      price: 44000,
      currency: "AZN",
      year: "2005",
      engine: 1.5,
      images: [
        "https://turbo.azstatic.com/uploads/f710x568/2023%2F01%2F11%2F11%2F19%2F41%2F5f34c8eb-5138-4d0c-b78e-8c817d98aa5f%2F52522_Mu2ZZs1LqQkRDJpgK-R_xw.jpg",
      ],
      city: "Bakı",
      dates: "Bu gün  14:30",
    },
    {
  
      brand: "Audi",
      model: "A5",
      banType: "Sedan",
      odometer: 165000,
      odometerUnit: "km",
      price: 16000,
      currency: "USD",
      year: "2013",
      credit: true,
      barter: true,
      images: [
        "https://turbo.azstatic.com/uploads/f710x568/2022%2F08%2F31%2F23%2F10%2F15%2F729c8b30-ea56-45d3-bdf7-f8a7b0e9e950%2F3015_eyJujDX3UzCcNboINLPl_g.jpg",
      ],
      city: "Masallı",
      dates: "Bu gün  14:30",
    },
    {
      id: "3",
      brand: "Toyota",
      model: "Camry",
      banType: "Sedan",
      odometer: 191000,
      odometerUnit: "km",
      price: 17300,
      currency: "AZN",
      year: "2007",
      credit: false,
      engine: 1.5,
      images: [
        "https://turbo.azstatic.com/uploads/full/2022%2F12%2F22%2F10%2F26%2F59%2F9f754715-d306-49f2-b2e2-60ab36f771e6%2F80870_wrsWRRQ-A4ySXmcF4jOpXg.jpg",
      ],
      city: "Ağdam",
      dates: "Bu gün  14:30",
    },
    {
      id: "4",
      brand: "Ford",
      model: "Transit",
      banType: "Karvan",
      odometer: 11000,
      odometerUnit: "km",
      price: 44500,
      currency: "USD",
      year: "2008",
      credit: true,
      engine: 1.5,
      images: [
        "https://turbo.azstatic.com/uploads/f710x568/2022%2F09%2F02%2F17%2F28%2F48%2Fa0bc3142-1854-48f9-9c81-ff7d7010c1ae%2F59959_CCv7BAr0Tlz1x7lQiFAsQA.jpg",
      ],
      city: "Naftalan",
      dates: "Bu gün  14:30",
    },
    {
      id: "5",
      brand: "Bestune",
      model: "T77",
      banType: "Offroader / SUV",
      odometer: 0,
      odometerUnit: "km",
      price: 45900,
      currency: "AZN",
      year: "2022",
      credit: false,
      engine: 1.5,
      images: [
        "https://turbo.azstatic.com/uploads/full/2022%2F09%2F19%2F17%2F33%2F45%2F027df0e9-c5df-46a1-8428-2a356ee17d45%2F44832_yspkMx-Q-VQPULaAOI_MSw.jpg",
      ],
      city: "Oğuz",
      dates: "Bu gün  14:30",
    },
    {
      id: "6",
      brand: "Honggi",
      model: "H9",
      banType: "Sedan",
      odometer: 0,
      odometerUnit: "km",
      price: 94000,
      currency: "AZN",
      year: "2005",
      credit: false,
      engine: 1.5,
      images: [
        "https://turbo.azstatic.com/uploads/full/2022%2F04%2F19%2F15%2F59%2F38%2F716b705f-e564-4d55-995a-7762e6881f4c%2F5883_vLXDlraa-zAkIkuXUdl05w.jpg",
      ],
      city: "Qax",
      dates: "Bu gün  14:30",
    },
    {
      id: "7",
      brand: "Ford",
      model: "Fusion",
      banType: "Sedan",
      odometer: 141622,
      odometerUnit: "km",
      price: 19500,
      currency: "AZN",
      year: "2015",
      credit: false,
      engine: 1.5,
      images: [
        "https://turbo.azstatic.com/uploads/full/2023%2F01%2F29%2F15%2F18%2F37%2F46fbb03a-0cd9-4409-bbc6-03023e588329%2F67200_jmTFoB8S36kCqexBERvuhA.jpg",
      ],
      city: "Gədəbəy",
      dates: "Bu gün  14:30",
    },
    {
      id: "8",
      brand: "Ford",
      model: "Fusion",
      banType: "Sedan",
      odometer: 129000,
      odometerUnit: "km",
      price: 25900,
      currency: "AZN",
      year: "2017",
      credit: false,
      engine: 1.5,
      images: [
        "https://turbo.azstatic.com/uploads/full/2023%2F01%2F29%2F18%2F08%2F03%2F20fc5e31-1f10-4b83-ade8-2d513db1c746%2F67209_O84rpgQMDkok2-nwStiHpg.jpg",
      ],
      city: "Gəncə",
      dates: "Bu gün  14:30",
    },
    {
      id: "9",
      brand: "Ford",
      model: "Fusion",
      banType: "Sedan",
      odometer: 46000,
      odometerUnit: "km",
      price: 21200,
      currency: "USD",
      year: "2020",
      credit: false,
      engine: 1.5,
      images: [
        "https://turbo.azstatic.com/uploads/full/2022%2F11%2F11%2F19%2F52%2F19%2F56291fd3-453f-426f-a911-3ca4f2e26362%2F17663_stveq78AA4WtPo3oyvVbHA.jpg",
      ],
      city: "Baki",
      dates: "Bu gün  14:30",
    },
    {
      id: "10",
      brand: "Ford",
      model: "Fusion",
      banType: "Sedan",
      odometer: 24945,
      odometerUnit: "km",
      price: 18500,
      currency: "AZN",
      year: "2015",
      credit: true,
      engine: 1.5,
      images: [
        "https://turbo.azstatic.com/uploads/full/2023%2F01%2F19%2F14%2F59%2F27%2F530eae46-d07d-4abc-bacb-de36d3088f0f%2F64922_Iu72BGd2C_OFe3WxVk-qGQ.jpg",
      ],
      city: "Ağcabədi",
      dates: "Bu gün  14:30",
    },
    {
      id: "11",
      brand: "Kia",
      model: "Seltos",
      banType: "Offroader / SUV",
      odometer: 30000,
      odometerUnit: "km",
      price: 40000,
      currency: "AZN",
      year: "2005",
      credit: false,
      engine: 1.5,
      images: [
        "https://turbo.azstatic.com/uploads/full/2022%2F10%2F20%2F20%2F19%2F37%2Ff0d40936-67d4-47b2-8f88-39e95c546ae3%2F57379_yzPNLn7TAwj6RDByWKgvOA.jpg",
      ],
      city: "Baki",
      dates: "Bu gün  14:30",
    },
    {
      id: "12",
      brand: "Ford",
      model: "Fusion",
      banType: "Sedan",
      odometer: 192000,
      odometerUnit: "km",
      price: 23500,
      currency: "AZN",
      year: "2014",
      credit: false,
      barter: true,
      images: [
        "https://turbo.azstatic.com/uploads/full/2023%2F01%2F30%2F15%2F48%2F00%2F097e698b-cbe7-4539-ab25-9a13a2a753fd%2F75247_xWTTEaAst4sLzUzIUkthPg.jpg",
      ],
      city: "Ağdaş",
      dates: "Bu gün  14:30",
    },
    {
      id: "13",
      brand: "Ford",
      model: "Fusion",
      banType: "Sedan",
      odometer: 20500,
      odometerUnit: "km",
      price: 42000,
      currency: "AZN",
      year: "2015",
      credit: true,
      barter: true,
      images: [
        "https://turbo.azstatic.com/uploads/full/2023%2F01%2F22%2F20%2F08%2F29%2F52caefc7-1570-4c7c-a077-fd1f816203cb%2F64916_MHdPUxu1eQ3kLAtY4hEzYg.jpg",
      ],
      city: "Ağsu",
      dates: "Bu gün  14:30",
    },
    {
      id: "14",
      brand: "Fusion",
      model: "Ford",
      banType: "Sedan",
      odometer: 30000,
      odometerUnit: "km",
      price: 40000,
      currency: "AZN",
      year: "2005",
      credit: true,
      barter: true,
      images: [
        "https://turbo.azstatic.com/uploads/full/2023%2F01%2F06%2F18%2F51%2F58%2Fc79abd63-a69c-48eb-b071-37506b868231%2F57686_CzbKH3fGBbBdGyq3D-qstQ.jpg",
      ],
      city: "Ağdaş",
      dates: "Bu gün  14:30",
    },
    {
      id: "15",
      brand: "Ford",
      model: "Sedan",
      banType: "Sedan",
      odometer: 122000,
      odometerUnit: "km",
      price: 40000,
      currency: "AZN",
      year: "2015",
      credit: false,
      barter: true,
      images: [
        "https://turbo.azstatic.com/uploads/full/2023%2F01%2F28%2F22%2F00%2F43%2F37fc61b4-f0e5-46c2-af9d-80f0b15b12c1%2F67189_ktr5R2gTZl44Bt3WKDgx2w.jpg",
      ],
      city: "Bərdə",
      dates: "Bu gün  14:30",
    },
    {
      id: "16",
      brand: "Ford",
      model: "Sedan",
      banType: "Sedan",
      odometer: 122000,
      odometerUnit: "km",
      price: 40000,
      currency: "AZN",
      year: "2015",
      credit: false,
      barter: true,
      images: [
        "https://turbo.azstatic.com/uploads/full/2023%2F01%2F28%2F22%2F00%2F43%2F37fc61b4-f0e5-46c2-af9d-80f0b15b12c1%2F67189_ktr5R2gTZl44Bt3WKDgx2w.jpg",
      ],
      city: "Bərdə",
      dates: "Bu gün  14:30",
    },
    {
      id: "17",
      brand: "Ford",
      model: "Sedan",
      banType: "Sedan",
      odometer: 12000,
      odometerUnit: "km",
      price: 40000,
      currency: "EUR",
      year: "2015",
      credit: true,
      barter: true,
      images: [
        "https://turbo.azstatic.com/uploads/full/2023%2F01%2F22%2F15%2F32%2F14%2F772966ba-5666-475a-a372-f12bf29a6393%2F78864_UB3_bVH_R5hoI0WN_uPsDQ.jpg",
      ],
      city: "Bərdə",
      dates: "Bu gün  14:30",
    },
    {
      id: "18",
      brand: "Ford",
      model: "Fusion",
      banType: "Sedan",
      odometer: 10000,
      odometerUnit: "km",
      price: 33000,
      currency: "AZN",
      year: "2005",
      credit: true,
      barter: true,
      images: [
        "https://turbo.azstatic.com/uploads/full/2023%2F01%2F22%2F21%2F06%2F21%2F7fc2989d-5606-4bba-84d5-91a7c1e3c11b%2F86601_iBRqpWaL3FFHzWvi-4ZGNQ.jpg",
      ],
      city: "Yevlax",
      dates: "Bu gün  14:30",
    },
    {
      id: "19",
      brand: "Ford",
      model: "Fusion",
      banType: "Sedan",
      odometer: 30000,
      odometerUnit: "km",
      price: 40000,
      currency: "EUR",
      year: "2005",
      credit: false,
      barter: true,
      images: [
        "https://turbo.azstatic.com/uploads/full/2023%2F01%2F12%2F19%2F55%2F07%2F9e2ccf81-d944-4b2f-8e63-a63bb368dfeb%2F8520_gtkNyAHKA6hUsNhuKMZOxw.jpg",
      ],
      city: "Göyçay",
      dates: "Bu gün  14:30",
    },
    {
      id: "20",
      brand: "Ford",
      model: "Fusion",
      banType: "Sedan",
      odometer: 50000,
      odometerUnit: "km",
      price: 12000,
      currency: "USD",
      year: "2005",
      credit: true,
      barter: true,
      images: [
        "https://turbo.azstatic.com/uploads/full/2023%2F01%2F06%2F13%2F55%2F32%2Facf4c052-5a2e-4bd0-a0df-e28ecc595151%2F11719_z5jP8sffJjJ_qsKGBXbQsw.jpg",
      ],
      city: "İmişli",
      dates: "Bu gün  14:30",
    },
    {
      id: "21",
      brand: "Mercedes",
      model: "A 140",
      banType: "Hetçbek",
      odometer: 50000,
      odometerUnit: "km",
      price: 12000,
      currency: "USD",
      year: "2005",
      credit: true,
      barter: true,
      images: [
        "https://turbo.azstatic.com/uploads/full/2023%2F01%2F29%2F19%2F39%2F48%2Fbae4dd1b-0f4e-4894-9e9b-7d4ed873ab27%2F67204_3_Uie01KEoSx4Ki0QWYwnA.jpg",
      ],
      city: "Bərdə",
      dates: "Bu gün  14:30",
    },
    {
      id: "22",
      brand: "Chevrolet",
      model: "Gatsby",
      banType: "Kabriolet",
      odometer: 16900,
      odometerUnit: "km",
      price: 126000,
      currency: "USD",
      year: "1986",
      credit: false,
      barter: true,
      images: [
        "https://turbo.azstatic.com/uploads/full/2022%2F09%2F16%2F12%2F50%2F42%2Febf8e8a9-4b9e-42d1-bb0c-725555a056e1%2F54915_qtOrHDVrjjW3-GNgDyN8vg.jpg",
      ],
      city: "Bakı",
      dates: "Bu gün  14:30",
    },
    {
      id: "23",
      brand: "Jaguar",
      model: "F-Type R",
      banType: "Kupe",
      odometer: 23000,
      odometerUnit: "km",
      price: 53000,
      currency: "USD",
      year: "2014",
      credit: true,
      barter: true,
      images: [
        "https://turbo.azstatic.com/uploads/full/2022%2F07%2F08%2F11%2F07%2F31%2Fd5fce961-38e1-47dd-8cf2-0eafc47ddb85%2F48187_u9isVaR_H7KHZwjuTS97bA.jpg",
      ],
      city: "Bakı",
      dates: "Bu gün  14:30",
    },
    {
      id: "24",
      brand: "Mercedes",
      model: "E 430",
      banType: "Kupe",
      odometer: 20200,
      odometerUnit: "km",
      price: 22000,
      currency: "AZN",
      year: "2000",
      credit: false,
      engine: 1.5,
      images: [
        "https://turbo.azstatic.com/uploads/full/2023%2F01%2F30%2F18%2F47%2F06%2F92202a2f-1f27-453f-a37e-c03b988d1187%2F49755_qZklKVXHkSfjWtrA_iHn_A.jpg",
      ],
      city: "Bakı",
      dates: "Bu gün  14:30",
    },
    {
      id: "25",
      brand: "C.Moto",
      model: "CM250R- HY",
      banType: "Motosiklet",
      odometer: 0,
      odometerUnit: "km",
      price: 5400,
      currency: "AZN",
      year: "2023",
      credit: false,
      engine: 1.5,
      images: [
        "https://turbo.azstatic.com/uploads/full/2023%2F01%2F31%2F16%2F42%2F46%2Fb60abf3c-aff7-450d-b793-bf93ceff3a06%2F15660_QvgVQpBtt9j4-9bpnj5N8Q.jpg",
      ],
      city: "Bakı",
      dates: "Bu gün  14:30",
    },
    {
      id: "26",
      brand: "Tayota",
      model: "Sienna",
      banType: "Minivan",
      odometer: 22000,
      odometerUnit: "km",
      price: 51400,
      currency: "USD",
      year: "2020",
      credit: false,
      barter: true,
      images: [
        "https://turbo.azstatic.com/uploads/full/2022%2F12%2F29%2F00%2F03%2F08%2F2ac930d3-3d5a-4b19-94fb-b63850ff5693%2F15334_aQbJ3Ea3Oz_WMOo_hHKCAg.jpg",
      ],
      city: "Horadiz",
      dates: "Bu gün  14:30",
    },
    {
      id: "27",
      brand: "Tayota",
      model: "Prius",
      banType: "Liftbek",
      odometer: 188293,
      odometerUnit: "km",
      price: 13900,
      currency: "EUR",
      year: "2020",
      credit: false,
      barter: true,
      images: [
        "https://turbo.azstatic.com/uploads/full/2023%2F01%2F24%2F14%2F33%2F40%2F0f9b3be6-4ae5-417a-bcf1-db0f39927d4e%2F33485_P0YBt9TmP9pEv29rCuhWLg.jpg",
      ],
      city: "İsmayıllı",
      dates: "Bu gün  14:30",
    },
    {
      id: "28",
      brand: "Porsche",
      model: "Panamera GTS",
      banType: "Liftbek",
      odometer: 188293,
      odometerUnit: "km",
      price: 55000,
      currency: "EUR",
      year: "2020",
      credit: false,
      barter: true,
      images: [
        "https://turbo.azstatic.com/uploads/full/2023%2F02%2F01%2F01%2F26%2F17%2Ffb77794e-9d37-424e-944d-3b233bc03467%2F12003_RjupQqZAh9kZFu-IaHqJ7g.jpg",
      ],
      city: "Şahbuz",
      dates: "Bu gün  14:30",
    },
    {
      id: "29",
      brand: "Paz",
      model: "672",
      banType: "Avtobus",
      odometer: 50000,
      odometerUnit: "km",
      price: 12000,
      currency: "USD",
      year: "2005",
      credit: true,
      barter: true,
      images: [
        "https://turbo.azstatic.com/uploads/full/2023%2F01%2F23%2F21%2F49%2F47%2F18227380-ca87-4ecc-8497-3c972bce2db1%2F42127_wKRyc3J6-wogJe-WZMY-ug.jpg",
      ],
      city: "İmişli",
      dates: "Bu gün  14:30",
    },
    {
      id: "30",
      brand: "Ferrari",
      model: "California",
      banType: "Rodster",
      odometer: 20000,
      odometerUnit: "km",
      price: 135000,
      currency: "USD",
      year: "2017",
      credit: true,
      engine: 1.5,
      images: [
        "https://turbo.azstatic.com/uploads/f710x568/2022%2F12%2F28%2F15%2F40%2F48%2Fb18d5c9e-58d7-4e2e-9bba-1c29cbce9940%2F61425_r8Og48iy5Jr9GvOTtAnnyQ.jpg",
      ],
      city: "Bakı",
      dates: "Bu gün  14:30",
    },
    {
      id: "31",
      brand: "Mercedes",
      model: "E 280",
      banType: "Sedan",
      odometer: 129000,
      odometerUnit: "km",
      price: 19700,
      currency: "AZN",
      year: "2009",
      credit: false,
      engine: 1.5,
      images: [
        "https://turbo.azstatic.com/uploads/f710x568/2023%2F01%2F31%2F21%2F26%2F41%2Fa8168d7c-d02e-495f-8f01-69fcdc5e3e03%2F11997_tG1Qr36Aqkf171mt0oZG7Q.jpg",
      ],
      city: "Bakı",
      dates: "Bu gün  14:30",
    },
    {
      id: "32",
      brand: "Mercedes",
      model: "E 200",
      banType: "Sedan",
      odometer: 315000,
      odometerUnit: "km",
      price: 14000,
      currency: "AZN",
      year: "2001",
      credit: false,
      engine: 1.5,
      images: [
        "https://turbo.azstatic.com/uploads/f710x568/2023%2F02%2F01%2F00%2F51%2F52%2F5638fb6b-7249-4f46-abd0-aa1efc451203%2F15643_AMLCTJrCWlvBJ6SXlF8fpg.jpg",
      ],
      city: "Sumqayıt",
      dates: "Bu gün  14:30",
    },
    {
      id: "33",
      brand: "Mercedes",
      model: "C 240",
      banType: "Sedan",
      odometer: 451000,
      odometerUnit: "km",
      price: 9500,
      currency: "AZN",
      year: "1997",
      credit: false,
      engine: 1.5,
      images: [
        "https://turbo.azstatic.com/uploads/f710x568/2023%2F02%2F01%2F00%2F50%2F33%2Fd092e0d3-04c1-4af7-a730-c240c35f5f7d%2F15649_bymZBq9rqL0M4TLjYtXR4A.jpg",
      ],
      city: "Bakı",
      dates: "Bu gün  14:30",
    },
    {
      id: "34",
      brand: "Mercedes",
      model: "A 170",
      banType: "Hetçbek",
      odometer: 199000,
      odometerUnit: "km",
      price: 10200,
      currency: "AZN",
      year: "2006",
      credit: false,
      engine: 1.5,
      images: [
        "https://turbo.azstatic.com/uploads/f710x568/2023%2F01%2F30%2F20%2F06%2F23%2F76cef983-6b3b-47b8-a58d-dfb3cf469b5d%2F75221_xUr0C4Z--56j6RIijVBWVA.jpg",
      ],
      city: "Bakı",
      dates: "Bu gün  14:30",
    },
    {
      id: "35",
      brand: "Mercedes",
      model: "Actros 1841",
      banType: "Dartqı",
      odometer: 1300000,
      odometerUnit: "km",
      price: 67500,
      currency: "AZN",
      year: "2008",
      credit: false,
      barter: true,
      images: [
        "https://turbo.azstatic.com/uploads/f710x568/2022%2F11%2F09%2F08%2F03%2F05%2Fcabbc910-8026-456f-a642-62ab99fc313e%2F10369_bNrqvfrJMy63hz0DwhXPcg.jpg",
      ],
      city: "Lənkəran",
      dates: "Bu gün  14:30",
    },
    {
      id: "36",
      brand: "Mercedes",
      model: "G 63 AMG",
      banType: "Offroader / SUV",
      odometer: 28000,
      odometerUnit: "km",
      price: 90200,
      currency: "AZN",
      year: "2016",
      credit: false,
      engine: 1.5,
      images: [
        "https://turbo.azstatic.com/uploads/f710x568/2023%2F01%2F31%2F20%2F36%2F16%2Ffb49abb0-fdf6-4595-87b0-27bdd3c3d226%2F12009_q1FoKTnpPA3uE3dtRcZZUA.jpg",
      ],
      city: "Bakı",
      dates: "Bu gün  14:30",
    },
    {
      id: "37",
      brand: "Mercedes",
      model: "200 D",
      banType: "Sedan",
      odometer: 552000,
      odometerUnit: "km",
      price: 5200,
      currency: "AZN",
      year: "1990",
      credit: false,
      barter: true,
      images: [
        "https://turbo.azstatic.com/uploads/full/2023%2F01%2F31%2F19%2F25%2F15%2F3aa9741d-4cc3-4ea0-9c3f-66ae5de0516b%2F6316_s0p7GRbRLVyaXdPugbuHeA.jpg",
      ],
      city: "Saatlı",
      dates: "Bu gün  14:30",
    },
    {
      id: "38",
      brand: "Mercedes",
      model: "0403",
      banType: "Avtobus",
      odometer: 700000,
      odometerUnit: "km",
      price: 110000,
      currency: "AZN",
      year: "2000",
      credit: false,
      engine: 1.5,
      images: [
        "https://turbo.azstatic.com/uploads/f710x568/2023%2F01%2F21%2F15%2F25%2F13%2F02798cb4-1129-4629-93af-b6dccb089966%2F78886_JqpeH6a5xab8QHW6E7dXKg.jpg",
      ],
      city: "Bakı",
      dates: "Bu gün  14:30",
    },
    {
      id: "39",
      brand: "Mercedes",
      model: "GLC 300 Coupe",
      banType: "Kupe",
      odometer: 7000,
      odometerUnit: "km",
      price: 72000,
      currency: "USD",
      year: "2021",
      credit: true,
      barter: true,
      images: [
        "https://turbo.azstatic.com/uploads/f710x568/2023%2F01%2F12%2F12%2F32%2F34%2Fef66aacc-979f-4824-9c38-4151faad457e%2F45824__18habOQ883XXQctAU0TAg.jpg",
      ],
      city: "Bakı",
      dates: "Bu gün  14:30",
    },
    {
      id: "40",
      brand: "Mercedes",
      model: "AMG GT 53",
      banType: "Sedan",
      odometer: 0,
      odometerUnit: "km",
      price: 210000,
      currency: "EUR",
      year: "2023",
      credit: true,
      engine: 1.5,
      images: [
        "https://turbo.azstatic.com/uploads/f710x568/2022%2F11%2F24%2F15%2F43%2F27%2Ff071d240-bc97-412c-a94a-bd3d676a51b2%2F23828_xAXUnAgmfcF8tuCOsfkz8Q.jpg",
      ],
      city: "Bakı",
      dates: "Bu gün  14:30",
    },
    {
      id: "41",
      brand: "Mercedes",
      model: "170 V",
      banType: "Kupe",
      odometer: 82000,
      odometerUnit: "km",
      price: 500000,
      currency: "AZN",
      year: "1938",
      credit: false,
      engine: 1.5,
      images: [
        "https://turbo.azstatic.com/uploads/f710x568/2022%2F10%2F27%2F14%2F39%2F36%2F923ef17d-e1f9-4149-9e94-f925cf7661b7%2F42871_umKrn-lPv1BfkzuD5arziA.jpg",
      ],
      city: "Bakı",
      dates: "Bu gün  14:30",
    },
    {
      id: "42",
      brand: "Jaguar",
      model: "XF",
      banType: "Sedan",
      odometer: 95000,
      odometerUnit: "km",
      price: 35000,
      currency: "AZN",
      year: "2014",
      credit: false,
      barter: true,
      images: [
        "https://turbo.azstatic.com/uploads/f710x568/2023%2F01%2F28%2F12%2F48%2F02%2Fe5c1b65a-c97f-4f94-ab4d-fcac497b20b6%2F67186_iILaSiss0FC-yQLMTjYR9A.jpg",
      ],
      city: "Sumqayıt",
      dates: "Bu gün  14:30",
    },
    {
      id: "43",
      brand: "Jaguar",
      model: "S-Type",
      banType: "Sedan",
      odometer: 190000,
      odometerUnit: "km",
      price: 17000,
      currency: "AZN",
      year: "2007",
      credit: false,
      engine: 1.5,
      images: [
        "https://turbo.azstatic.com/uploads/f710x568/2023%2F01%2F30%2F20%2F01%2F36%2Fb8325e8f-b0b1-4423-8163-59ab513c0445%2F49759_qjtKYlmSfvuA_6JFNFa8AQ.jpg",
      ],
      city: "Gəncə",
      dates: "Bu gün  14:30",
    },
    {
      id: "44",
      brand: "Jaguar",
      model: "XF",
      banType: "Sedan",
      odometer: 9500,
      odometerUnit: "km",
      price: 58000,
      currency: "USD",
      year: "2019",
      credit: true,
      engine: 1.5,
      images: [
        "https://turbo.azstatic.com/uploads/f710x568/2021%2F02%2F04%2F11%2F55%2F52%2Ff3ddd4c9-1600-4d6d-b34f-5853f3c1ff71%2F19864_8RtK5APm1te6PSMZ3o2MLg.jpg",
      ],
      city: "Bakı",
      dates: "Bu gün  14:30",
    },
    {
      id: "45",
      brand: "Jaguar",
      model: "F-Type R,",
      banType: "Sedan",
      odometer: 500,
      odometerUnit: "km",
      price: 60000,
      currency: "EUR",
      year: "2020",
      credit: true,
      engine: 1.5,
      images: [
        "https://turbo.azstatic.com/uploads/f710x568/2022%2F12%2F31%2F11%2F03%2F22%2Fb774f69d-3dc8-45d8-bf74-7fe3b1e68012%2F16508_ZEyGXYpx-MxvNSzE3M3s7A.jpg",
      ],
      city: "Bakı",
      dates: "Bu gün  14:30",
    },
    {
      id: "46",
      brand: "Acura",
      model: "MDX",
      banType: "Offroader / SUV",
      odometer: 500,
      odometerUnit: "km",
      price: 60000,
      currency: "EUR",
      year: "2020",
  
      engine: 1.5,
      images: [
        "https://turbo.azstatic.com/uploads/full/2023%2F01%2F31%2F13%2F41%2F14%2F30be4e7e-c9ac-455d-8616-616f096d6da7%2F71593_f9yNl7lW4FO-spgOift6dw.jpg",
      ],
      city: "Mingecevir",
      dates: " Bu gün  14:30",
    },
  ];

  const masinList = document.getElementById('masinList')

  function show(arg) {
    masinList.innerHTML = '';
  
    arg.forEach(item => {
      let engine = '';
      
      if (item.hasOwnProperty('engine')) {
        engine = item.engine + 'L,';
      }
  
      masinList.innerHTML += `
        <div class="bg-white py-3 rounded-xl shadow hover:shadow-lg transition-shadow duration cursor-pointer w-[250px] gap-3 m-3">
          <img class="w-[300px] h-[150px] px-[20px] mb-3" alt="${item.name}" src="${item.images}"/>
          <p class="text-[20px] px-[30px]">${item.price} ${item.currency}</p>
          <p class="text-[20px] px-[30px]">${item.brand}, ${item.model}</p>
          <p class="text-[16px] px-[30px]">${item.banType}</p>
          <p class="font-[20px] px-[30px]">${item.year}, ${engine} ${item.odometer} ${item.odometerUnit}</p>
          <p class="font-[20px] px-[30px]">${item.city}, ${item.dates}</p>
        </div>`;
    });
  }
  
  
  show(data);


  const brand = document.getElementById('brand')
  const model = document.getElementById('model')
  const city = document.getElementById('city')
  const yearIn = document.getElementById('yearIn')
  const yearOff= document.getElementById('yearOff')
  const currency= document.getElementById('currency')
  
  let uniqueBrand = new Set();

  data.map(item => uniqueBrand.add(item.brand));
  Array.from(uniqueBrand).map(item => brand.innerHTML += `<option style="font-size: 1rem;">${item}</option>`);
  function filterBrand() {
      let uniqueModel = new Set();
      model.innerHTML = '<option disabled selected>Model</option>'
      if (brand.value != 'Marka') {
          let filteredModel = data.filter(item => item.brand == brand.value);
          filteredModel.map(item => uniqueModel.add(item.model));
          Array.from(uniqueModel).map(item => model.innerHTML += `<option style="font-size: 1rem;">${item}</option>`);
      }
  }


let cityArr = [];
data.forEach(item => {
    if (!cityArr.includes(item.city)) cityArr.push(item.city);
});
cityArr.forEach(item => {
    city.innerHTML += `<option style="font-size: 1rem;">${item}</option>`;
});

let yearArr = [];
data.forEach(item => {
    if(!yearArr.includes(item.year)) yearArr.push(item.year);
});
yearArr.sort();
yearArr.forEach(item => {
    yearIn.innerHTML += `<option style="font-size: 1rem;">${item}</option>`;
});
yearArr.forEach(item => {
  yearOff.innerHTML += `<option style="font-size: 1rem;">${item}</option>`;
});

let currencyArr = [];
data.forEach(item => {
    if (!currencyArr.includes(item.currency)) currencyArr.push(item.currency);
});
currencyArr.forEach(item => {
  currency.innerHTML += `<option style="font-size: 1rem;">${item}</option>`;
});

let banArr = [];
data.forEach(item => {
  if (!banArr.includes(item.banType)) banArr.push(item.banType);
});
banArr.forEach(item => {
  banType.innerHTML += `<option style="font-size: 1rem;">${item}</option>`;
});

let filteredItem = []

function filter() {
  if(brand.value) {
      filteredItem = data.filter(item => item.brand === brand.value)
  }

  if(model.value) {
      let newFilteredItem = (filteredItem.length > 0) ? filteredItem : data
      filteredItem = newFilteredItem.filter(item => item.model === model.value)
  }
  
  if(city.value != 'Seher') {
      let newFilteredItem = (filteredItem.length > 0) ? filteredItem : data
      filteredItem = newFilteredItem.filter(item => item.city === city.value)
  } 

  if(banType.value != 'Ban novu'){
    let newFilteredItem = (filteredItem.length > 0) ? filteredItem : data
      filteredItem = newFilteredItem.filter(item => item.banType === banType.value)
  }

  if(yearIn.value != 'IL, min.'){
    let newFilteredItem = (filteredItem.length > 0) ? filteredItem : data
    filteredItem = newFilteredItem.filter(item => item.year >= yearIn.value)
  }

  if(yearOff.value != 'maks.'){
    let newFilteredItem = (filteredItem.length > 0) ? filteredItem : data
    filteredItem = newFilteredItem.filter(item => item.year <= yearOff.value)
  }

  if(currency.value != 'AZN'){
    
    let newFilteredItem = (filteredItem.length > 0) ? filteredItem : data
    filteredItem = newFilteredItem.filter(item => item.currency === currency.value)
  }
  
  if(btnCredit.classList.contains('bg-red-200')) {
    let newFilteredItem = (filteredItem.length > 0) ? filteredItem : data
    filteredItem = newFilteredItem.filter(item => item.credit === true)

  }

  if(btnBarter.classList.contains('bg-red-200')) {
    let newFilteredItem = (filteredItem.length > 0) ? filteredItem : data
    filteredItem = newFilteredItem.filter(item => item.barter === true)

  }
  function show(arg) {
    masinList.innerHTML = '';
  
    arg.forEach(item => {
      let engine = '';
      
      if (item.hasOwnProperty('engine')) {
        engine = item.engine + 'L,';
      }
  
      masinList.innerHTML += `
        <div class="bg-white py-2 rounded-xl shadow hover:shadow-lg transition-shadow duration cursor-pointer w-[250px] gap-3 m-3">
          <img class="w-[300px] h-[150px] px-[20px] mb-3" alt="${item.name}" src="${item.images}"/>
          <p class="text-[20px] px-[30px]">${item.price} ${item.currency}</p>
          <p class="text-[20px] px-[30px]">${item.brand}, ${item.model}</p>
          <p class="text-[16px] px-[30px]">${item.banType}</p>
          <p class="font-[20px] px-[30px]">${item.year}, ${engine} ${item.odometer} ${item.odometerUnit}</p>
          <p class="font-[20px] px-[30px]">${item.city}, ${item.dates}</p>
        </div>`;
    });
  }
  
  
  show(filteredItem);
}

  const btn1 = document.getElementById('btn1')
  const btn2 = document.getElementById('btn2')
  const btn3 = document.getElementById('btn3')
  
  function redSelect(selectedBtn) {
    btn1.style.background = "white";
    btn2.style.background = "white";
    btn3.style.background = "white";
    btn1.style.color = "#99a1af";
    btn2.style.color = "#99a1af";
    btn3.style.color = "#99a1af";
  
    selectedBtn.style.background = "oklch(0.577 0.245 27.325)";
    selectedBtn.style.color = "white"
  }

   const btn4 = document.getElementById('btn4')
   const btn5 = document.getElementById('btn5')
   const btn6 = document.getElementById('btn6')
  
   function red1Select(selectedBtn) {
    btn4.style.background = "white";
    btn5.style.background = "white";
    btn6.style.background = "white";
    btn4.style.color = "#99a1af";
    btn5.style.color = "#99a1af";
    btn6.style.color = "#99a1af";

    selectedBtn.style.background = "oklch(0.577 0.245 27.325)";
    selectedBtn.style.color = "white"
  }

const btnCredit = document.getElementById('btnCredit')
      btnCredit.addEventListener("click", function () {
        btnCredit.classList.toggle("bg-red-200"); 
        btnCredit.classList.toggle("text-red-700"); 
        btnCredit.classList.toggle("border");
        btnCredit.classList.toggle("border-red-700");
        btnCredit.classList.toggle("bg-white");     
        btnCredit.classList.toggle("text-black");   
});
const btnBarter = document.getElementById('btnBarter')
      btnBarter.addEventListener("click", function () {
        btnBarter.classList.toggle("bg-red-200"); 
        btnBarter.classList.toggle("text-red-700"); 
        btnBarter.classList.toggle("border");
        btnBarter.classList.toggle("border-red-700");
        btnBarter.classList.toggle("bg-white");   
        btnBarter.classList.toggle("text-black"); 
});
const btn7 = document.getElementById('btn7')
      btn7.addEventListener("click", function () {
        btn7.classList.toggle("bg-red-200"); 
        btn7.classList.toggle("text-red-700"); 
        btn7.classList.toggle("border");
        btn7.classList.toggle("border-red-700");
        btn7.classList.toggle("bg-white");   
        btn7.classList.toggle("text-black"); 
});
const btn8 = document.getElementById('btn8')
      btn8.addEventListener("click", function () {
        btn8.classList.toggle("bg-red-200"); 
        btn8.classList.toggle("text-red-700"); 
        btn8.classList.toggle("border");
        btn8.classList.toggle("border-red-700");
        btn8.classList.toggle("bg-white");   
        btn8.classList.toggle("text-black"); 
});
const btn9 = document.getElementById('btn9')
      btn9.addEventListener("click", function () {
        btn9.classList.toggle("bg-red-200"); 
        btn9.classList.toggle("text-red-700"); 
        btn9.classList.toggle("border");
        btn9.classList.toggle("border-red-700");
        btn9.classList.toggle("bg-white");   
        btn9.classList.toggle("text-black"); 
});
const btn10 = document.getElementById('btn10')
      btn10.addEventListener("click", function () {
        btn10.classList.toggle("bg-red-200"); 
        btn10.classList.toggle("text-red-700");
        btn10.classList.toggle("border"); 
        btn10.classList.toggle("border-red-700");
        btn10.classList.toggle("bg-white");   
        btn10.classList.toggle("text-black"); 
});
const btn11 = document.getElementById('btn11')
      btn11.addEventListener("click", function () {
        btn11.classList.toggle("bg-red-200"); 
        btn11.classList.toggle("text-red-700");
        btn11.classList.toggle("border"); 
        btn11.classList.toggle("border-red-700");
        btn11.classList.toggle("bg-white");   
        btn11.classList.toggle("text-black"); 
});
const btn12 = document.getElementById('btn12')
      btn12.addEventListener("click", function () {
        btn12.classList.toggle("bg-red-200"); 
        btn12.classList.toggle("text-red-700"); 
        btn12.classList.toggle("border");
        btn12.classList.toggle("border-red-700");
        btn12.classList.toggle("bg-white");   
        btn12.classList.toggle("text-black"); 
});
const btn13 = document.getElementById('btn13')
      btn13.addEventListener("click", function () {
        btn13.classList.toggle("bg-red-200"); 
        btn13.classList.toggle("text-red-700"); 
        btn13.classList.toggle("border");
        btn13.classList.toggle("border-red-700");
        btn13.classList.toggle("bg-white");   
        btn13.classList.toggle("text-black"); 
});
const btn14 = document.getElementById('btn14')
      btn14.addEventListener("click", function () {
        btn14.classList.toggle("bg-red-200"); 
        btn14.classList.toggle("text-red-700"); 
        btn14.classList.toggle("border");
        btn14.classList.toggle("border-red-700");
        btn14.classList.toggle("bg-white");   
        btn14.classList.toggle("text-black"); 
});
const btn15 = document.getElementById('btn15')
      btn15.addEventListener("click", function () {
        btn15.classList.toggle("bg-red-200"); 
        btn15.classList.toggle("text-red-700"); 
        btn15.classList.toggle("border");
        btn15.classList.toggle("border-red-700");
        btn15.classList.toggle("bg-white");   
        btn15.classList.toggle("text-black"); 
});
const btn16 = document.getElementById('btn16')
      btn16.addEventListener("click", function () {
        btn16.classList.toggle("bg-red-200"); 
        btn16.classList.toggle("text-red-700"); 
        btn16.classList.toggle("border");
        btn16.classList.toggle("border-red-700");
        btn16.classList.toggle("bg-white");   
        btn16.classList.toggle("text-black"); 
});
const btn17 = document.getElementById('btn17')
      btn17.addEventListener("click", function () {
        btn17.classList.toggle("bg-red-200"); 
        btn17.classList.toggle("text-red-700"); 
        btn17.classList.toggle("border");
        btn17.classList.toggle("border-red-700");
        btn17.classList.toggle("bg-white");   
        btn17.classList.toggle("text-black"); 
});
const btn18 = document.getElementById('btn18')
      btn18.addEventListener("click", function () {
        btn18.classList.toggle("bg-red-200"); 
        btn18.classList.toggle("text-red-700"); 
        btn18.classList.toggle("border");
        btn18.classList.toggle("border-red-700");
        btn18.classList.toggle("bg-white");   
        btn18.classList.toggle("text-black"); 
});
const btn19 = document.getElementById('btn19')
      btn19.addEventListener("click", function () {
        btn19.classList.toggle("bg-red-200"); 
        btn19.classList.toggle("text-red-700"); 
        btn19.classList.toggle("border");
        btn19.classList.toggle("border-red-700");
        btn19.classList.toggle("bg-white");   
        btn19.classList.toggle("text-black"); 
});
const btn20 = document.getElementById('btn20')
      btn20.addEventListener("click", function () {
        btn20.classList.toggle("bg-red-200"); 
        btn20.classList.toggle("text-red-700"); 
        btn20.classList.toggle("border");
        btn20.classList.toggle("border-red-700");
        btn20.classList.toggle("bg-white");   
        btn20.classList.toggle("text-black"); 
});
const btn21 = document.getElementById('btn21')
      btn21.addEventListener("click", function () {
        btn21.classList.toggle("bg-red-200"); 
        btn21.classList.toggle("text-red-700"); 
        btn21.classList.toggle("border");
        btn21.classList.toggle("border-red-700");
        btn21.classList.toggle("bg-white");   
        btn21.classList.toggle("text-black"); 
});
const btn22 = document.getElementById('btn22')
      btn22.addEventListener("click", function () {
        btn22.classList.toggle("bg-red-200"); 
        btn22.classList.toggle("text-red-700"); 
        btn22.classList.toggle("border");
        btn22.classList.toggle("border-red-700");
        btn22.classList.toggle("bg-white");   
        btn22.classList.toggle("text-black"); 
});



        const resetFilterBtn = document.getElementById("resetFilterBtn")
        const openFilterBtn = document.getElementById("openFilterBtn")
        const closeFilterBtn = document.getElementById("closeFilterBtn")
        const hiddenDiv = document.getElementById('hiddenDiv')
        const filterInputs = document.querySelectorAll("input, select")

        function openBtn() {
            hiddenDiv.classList.remove("hidden"); 
            openFilterBtn.classList.add("hidden"); 
            closeFilterBtn.classList.remove("hidden"); 
        }

        function closeBtn() {
            hiddenDiv.classList.add("hidden"); 
            openFilterBtn.classList.remove("hidden"); 
            closeFilterBtn.classList.add("hidden"); 
        }

        function resetBtn() {
          brand.value = 'Marka'
          filterBrand()
          city.value = 'Seher'
          yearIn.value = 'IL, min.'
          yearOff.value ='maks.'
          currency.value = 'AZN'
          banType.value = 'Ban novu'

          btnCredit.classList.remove("bg-red-200"); 
          btnCredit.classList.remove("text-red-700"); 
          btnCredit.classList.add("bg-white"); 
          btnCredit.classList.remove("border");
          btnCredit.classList.remove("border-red-700");

          btnBarter.classList.remove("bg-red-200"); 
          btnBarter.classList.remove("text-red-700"); 
          btnBarter.classList.add("bg-white");  
          btnBarter.classList.remove("border");
          btnBarter.classList.remove("border-red-700");

          btn7.classList.remove("bg-red-200"); 
          btn7.classList.remove("text-red-700"); 
          btn7.classList.add("bg-white");
          btn7.classList.remove("border");
          btn7.classList.remove("border-red-700");

          btn8.classList.remove("bg-red-200"); 
          btn8.classList.remove("text-red-700"); 
          btn8.classList.add("bg-white"); 
          btn8.classList.remove("border");
          btn8.classList.remove("border-red-700");

          btn9.classList.remove("bg-red-200"); 
          btn9.classList.remove("text-red-700"); 
          btn9.classList.add("bg-white");
          btn9.classList.remove("border");
          btn9.classList.remove("border-red-700");

          btn10.classList.remove("bg-red-200"); 
          btn10.classList.remove("text-red-700"); 
          btn10.classList.add("bg-white");
          btn10.classList.remove("border");
          btn10.classList.remove("border-red-700");

          btn11.classList.remove("bg-red-200"); 
          btn11.classList.remove("text-red-700"); 
          btn11.classList.add("bg-white");
          btn11.classList.remove("border");
          btn11.classList.remove("border-red-700");

          btn12.classList.remove("bg-red-200"); 
          btn12.classList.remove("text-red-700"); 
          btn12.classList.add("bg-white");
          btn12.classList.remove("border");
          btn12.classList.remove("border-red-700");

          btn13.classList.remove("bg-red-200"); 
          btn13.classList.remove("text-red-700"); 
          btn13.classList.add("bg-white");
          btn13.classList.remove("border");
          btn13.classList.remove("border-red-700");

          btn14.classList.remove("bg-red-200"); 
          btn14.classList.remove("text-red-700"); 
          btn14.classList.add("bg-white");
          btn14.classList.remove("border");
          btn14.classList.remove("border-red-700");

          btn15.classList.remove("bg-red-200"); 
          btn15.classList.remove("text-red-700"); 
          btn15.classList.add("bg-white");
          btn15.classList.remove("border");
          btn15.classList.remove("border-red-700");

          btn16.classList.remove("bg-red-200"); 
          btn16.classList.remove("text-red-700"); 
          btn16.classList.add("bg-white");
          btn16.classList.remove("border");
          btn16.classList.remove("border-red-700");

          btn17.classList.remove("bg-red-200"); 
          btn17.classList.remove("text-red-700"); 
          btn17.classList.add("bg-white");
          btn17.classList.remove("border");
          btn17.classList.remove("border-red-700");

          btn18.classList.remove("bg-red-200"); 
          btn18.classList.remove("text-red-700"); 
          btn18.classList.add("bg-white");
          btn18.classList.remove("border");
          btn18.classList.remove("border-red-700");

          btn19.classList.remove("bg-red-200"); 
          btn19.classList.remove("text-red-700"); 
          btn19.classList.add("bg-white");
          btn19.classList.remove("border");
          btn19.classList.remove("border-red-700");

          btn20.classList.remove("bg-red-200"); 
          btn20.classList.remove("text-red-700"); 
          btn20.classList.add("bg-white");
          btn20.classList.remove("border");
          btn20.classList.remove("border-red-700");

          btn21.classList.remove("bg-red-200"); 
          btn21.classList.remove("text-red-700"); 
          btn21.classList.add("bg-white");
          btn21.classList.remove("border");
          btn21.classList.remove("border-red-700");

          btn22.classList.remove("bg-red-200"); 
          btn22.classList.remove("text-red-700"); 
          btn22.classList.add("bg-white");
          btn22.classList.remove("border");
          btn22.classList.remove("border-red-700");
          show(data)
        }


