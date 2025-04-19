
// Types for food suggestions
type FoodSuggestion = {
  name: string;
  explanation: string;
  healthBenefit: string;
  type: 'fruit' | 'vegetable';
};

// Hindi translations for food suggestions
const hindiTranslations: Record<string, FoodSuggestion> = {
  "Apple": {
    name: "सेब",
    explanation: "इसमें प्राकृतिक शुगर होती है जो रक्त शर्करा को जल्दी बढ़ाने में मदद कर सकती है और फाइबर भी प्रदान करती है।",
    healthBenefit: "फाइबर शुगर के अवशोषण को धीमा करता है, जिससे रक्त शर्करा में उछाल को रोका जाता है।",
    type: 'fruit'
  },
  "Banana": {
    name: "केला",
    explanation: "पोटैशियम से भरपूर और कम रक्त शर्करा के लिए जल्दी पचने वाले कार्बोहाइड्रेट प्रदान करता है।",
    healthBenefit: "उचित इलेक्ट्रोलाइट संतुलन बनाए रखने में मदद करता है और त्वरित ऊर्जा प्रदान करता है।",
    type: 'fruit'
  },
  "Orange": {
    name: "संतरा",
    explanation: "विटामिन सी और फाइबर के साथ प्राकृतिक शुगर होती है।",
    healthBenefit: "विटामिन सी प्रतिरक्षा प्रणाली का समर्थन करता है और मध्यम ग्लाइसेमिक प्रतिक्रिया प्रदान करता है।",
    type: 'fruit'
  },
  "Sweet Potato": {
    name: "शकरकंद",
    explanation: "जटिल कार्बोहाइड्रेट जो सरल शुगर की तुलना में अधिक स्थिर रूप से ऊर्जा जारी करते हैं।",
    healthBenefit: "फाइबर, विटामिन से भरपूर और सफेद आलू की तुलना में कम ग्लाइसेमिक इंडेक्स है।",
    type: 'vegetable'
  },
  "Berries": {
    name: "बेरीज़",
    explanation: "एंटीऑक्सिडेंट और फाइबर से भरपूर कम ग्लाइसेमिक फल।",
    healthBenefit: "आवश्यक पोषक तत्व प्रदान करते हुए स्वस्थ रक्त शर्करा के स्तर को बनाए रखने में मदद करता है।",
    type: 'fruit'
  },
  "Spinach": {
    name: "पालक",
    explanation: "पोषक तत्वों से भरपूर कम-कार्ब पत्तेदार हरी सब्जी।",
    healthBenefit: "मैग्नीशियम से भरपूर जो ग्लूकोज चयापचय में मदद करता है।",
    type: 'vegetable'
  },
  "Broccoli": {
    name: "ब्रोकली",
    explanation: "फाइबर और क्रोमियम से भरपूर, जो रक्त शर्करा को नियंत्रित करने में मदद करता है।",
    healthBenefit: "इंसुलिन फंक्शन का समर्थन करता है और आवश्यक विटामिन प्रदान करता है।",
    type: 'vegetable'
  },
  "Avocado": {
    name: "एवोकाडो",
    explanation: "रक्त शर्करा पर न्यूनतम प्रभाव के साथ स्वस्थ वसा से भरपूर।",
    healthBenefit: "ग्लूकोज स्पाइक्स के बिना हृदय स्वास्थ्य का समर्थन करता है और निरंतर ऊर्जा प्रदान करता है।",
    type: 'fruit'
  },
  "Bitter Gourd": {
    name: "करेला",
    explanation: "इसमें ऐसे यौगिक होते हैं जो प्राकृतिक रूप से रक्त ग्लूकोज के स्तर को कम करने में मदद करते हैं।",
    healthBenefit: "इंसुलिन संवेदनशीलता और ग्लूकोज सहनशीलता में सुधार कर सकता है।",
    type: 'vegetable'
  },
  "Kale": {
    name: "केल",
    explanation: "रक्त शर्करा को प्रबंधित करने में मदद करने के लिए बहुत कम कार्ब्स और उच्च फाइबर।",
    healthBenefit: "इसमें अल्फा-लिपोइक एसिड होता है जो रक्त ग्लूकोज के स्तर को कम कर सकता है।",
    type: 'vegetable'
  },
  "Cucumber": {
    name: "खीरा",
    explanation: "उच्च पानी सामग्री, बहुत कम कार्ब सब्जी जो रक्त शर्करा पर सौम्य है।",
    healthBenefit: "हाइड्रेशन में मदद करता है और ऐसे यौगिक होते हैं जो रक्त शर्करा को कम करने में मदद कर सकते हैं।",
    type: 'vegetable'
  },
  "Green Apple": {
    name: "हरा सेब",
    explanation: "अन्य फलों की तुलना में कम शुगर सामग्री के साथ लाभकारी फाइबर।",
    healthBenefit: "इसमें एंटीऑक्सिडेंट होते हैं जो उच्च रक्त शर्करा से जुड़े ऑक्सीडेटिव नुकसान को कम करने में मदद करते हैं।",
    type: 'fruit'
  }
};

// Telugu translations for food suggestions
const teluguTranslations: Record<string, FoodSuggestion> = {
  "Apple": {
    name: "ఆపిల్",
    explanation: "సహజ చక్కెరలు ఉన్నాయి, రక్తంలో చక్కెర స్థాయిలను త్వరగా పెంచడంలో సహాయపడుతుంది మరియు ఫైబర్ ను అందిస్తుంది.",
    healthBenefit: "ఫైబర్ చక్కెర శోషణను నెమ్మదిస్తుంది, రక్తంలో చక్కెర స్థాయిలు పెరగకుండా నిరోధిస్తుంది.",
    type: 'fruit'
  },
  "Banana": {
    name: "అరటిపండు",
    explanation: "పొటాషియంతో సమృద్ధిగా ఉంటుంది మరియు తక్కువ రక్తంలో చక్కెర స్థాయిలకు త్వరగా జీర్ణమయ్యే కార్బోహైడ్రేట్లను అందిస్తుంది.",
    healthBenefit: "సరైన ఎలెక్ట్రోలైట్ సమతుల్యతను నిర్వహించడంలో సహాయపడుతుంది మరియు త్వరిత శక్తిని అందిస్తుంది.",
    type: 'fruit'
  },
  "Orange": {
    name: "నారింజ",
    explanation: "విటమిన్ సి మరియు ఫైబర్‌తో సహజ చక్కెరలు కలిగి ఉంటుంది.",
    healthBenefit: "విటమిన్ సి రోగనిరోధక శక్తిని మెరుగుపరుస్తుంది మరియు మితమైన గ్లైసెమిక్ ప్రతిస్పందనను అందిస్తుంది.",
    type: 'fruit'
  },
  "Sweet Potato": {
    name: "స్వీట్ పొటేటో",
    explanation: "సాధారణ చక్కెరల కంటే ఎక్కువ స్థిరంగా శక్తిని విడుదల చేసే క్లిష్టమైన కార్బోహైడ్రేట్లు.",
    healthBenefit: "ఫైబర్, విటమిన్లతో సమృద్ధిగా ఉంటుంది మరియు తెల్ల బంగాళాదుంపల కంటే తక్కువ గ్లైసెమిక్ సూచిక కలిగి ఉంటుంది.",
    type: 'vegetable'
  },
  "Berries": {
    name: "బెర్రీలు",
    explanation: "యాంటీఆక్సిడెంట్లు మరియు ఫైబర్‌తో సమృద్ధిగా ఉన్న తక్కువ గ్లైసెమిక్ పండ్లు.",
    healthBenefit: "అవసరమైన పోషకాలను అందిస్తూ ఆరోగ్యకరమైన రక్తంలో చక్కెర స్థాయిలను నిర్వహించడంలో సహాయపడుతుంది.",
    type: 'fruit'
  },
  "Spinach": {
    name: "పాలకూర",
    explanation: "పోషకాలతో నిండిన తక్కువ కార్బ్ ఆకుకూరలు.",
    healthBenefit: "గ్లూకోజ్ చర్యావిధానంలో సహాయపడే మెగ్నీషియంతో సమృద్ధిగా ఉంటుంది.",
    type: 'vegetable'
  },
  "Broccoli": {
    name: "బ్రోకలీ",
    explanation: "ఫైబర్ మరియు క్రోమియంతో నిండి ఉంటుంది, ఇది రక్తంలో చక్కెర స్థాయిలను నియంత్రించడంలో సహాయపడుతుంది.",
    healthBenefit: "ఇన్సులిన్ పనితీరును బలపరుస్తుంది మరియు అవసరమైన విటమిన్లను అందిస్తుంది.",
    type: 'vegetable'
  },
  "Avocado": {
    name: "అవకాడో",
    explanation: "రక్తంలో చక్కెర స్థాయిలపై కనీస ప్రభావంతో ఆరోగ్యకరమైన కొవ్వులతో సమృద్ధిగా ఉంటుంది.",
    healthBenefit: "గుండె ఆరోగ్యాన్ని మెరుగుపరుస్తుంది మరియు గ్లూకోజ్ పెరుగుదల లేకుండా నిలకడైన శక్తిని అందిస్తుంది.",
    type: 'fruit'
  },
  "Bitter Gourd": {
    name: "కాకరకాయ",
    explanation: "సహజంగా రక్తంలో గ్లూకోజ్ స్థాయిలను తగ్గించడంలో సహాయపడే సమ్మేళనాలను కలిగి ఉంటుంది.",
    healthBenefit: "ఇన్సులిన్ సున్నితత్వం మరియు గ్లూకోజ్ సహనాన్ని మెరుగుపరచవచ్చు.",
    type: 'vegetable'
  },
  "Kale": {
    name: "కేల్",
    explanation: "రక్తంలో చక్కెర స్థాయిలను నిర్వహించడంలో సహాయపడటానికి చాలా తక్కువ కార్బ్స్ మరియు అధిక ఫైబర్.",
    healthBenefit: "ఆల్ఫా-లిపోయిక్ యాసిడ్‌ని కలిగి ఉంటుంది, ఇది రక్తంలో గ్లూకోజ్ స్థాయిలను తగ్గించగలదు.",
    type: 'vegetable'
  },
  "Cucumber": {
    name: "దోసకాయ",
    explanation: "అధిక నీటి కంటెంట్, చాలా తక్కువ కార్బ్ కూరగాయ అది రక్తంలో చక్కెర స్థాయిలపై మృదువుగా ఉంటుంది.",
    healthBenefit: "హైడ్రేషన్‌లో సహాయపడుతుంది మరియు రక్తంలో చక్కెర స్థాయిలను తగ్గించడంలో సహాయపడే సమ్మేళనాలను కలిగి ఉంటుంది.",
    type: 'vegetable'
  },
  "Green Apple": {
    name: "గ్రీన్ యాపిల్",
    explanation: "ఇతర పండ్ల కంటే తక్కువ చక్కెర కంటెంట్ తో ప్రయోజనకరమైన ఫైబర్.",
    healthBenefit: "అధిక రక్తంలో చక్కెరతో సంబంధం ఉన్న ఆక్సీకరణ నష్టాన్ని తగ్గించడంలో సహాయపడే యాంటీఆక్సిడెంట్లను కలిగి ఉంటుంది.",
    type: 'fruit'
  }
};

// Function to translate food suggestions based on language
export const getTranslatedFoodSuggestions = (suggestions: FoodSuggestion[], language: string): FoodSuggestion[] => {
  if (language === "english") {
    return suggestions;
  }

  const translationsMap = language === "hindi" ? hindiTranslations : 
                          language === "telugu" ? teluguTranslations : null;
  
  if (!translationsMap) {
    return suggestions; // Return original if no translation available
  }

  return suggestions.map(suggestion => {
    const translation = translationsMap[suggestion.name];
    
    if (translation) {
      return translation;
    }
    
    // Return original if no translation found for this food item
    return suggestion;
  });
};
