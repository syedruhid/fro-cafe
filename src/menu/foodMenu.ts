export interface MenuItem {
    name: string;
    nameEn?: string;
    description?: string;
    descriptionEn?: string;
    price?: string;
    category: string;
    categoryEn?: string;
    options?: { name: string; nameEn?: string; price: string }[];
  }
  
  export const foodMenu: MenuItem[] = [
    // Lunch - Köttbuller
    {
      name: "Köttbuller – Vegan",
      nameEn: "Meatballs – Vegan",
      description:
        "Runde Falafelbällchen mit Süßkartoffel, serviert mit veganem Kräuterdip, frischem Fjordkräutersalat, eingelegter roter Zwiebel und Balsamico-Dressing.",
      descriptionEn:
        "Round falafel balls with sweet potato, served with vegan herb dip, fresh fjord herb salad, pickled red onion and balsamic dressing.",
      price: "12,90€",
      category: "Lunch",
      categoryEn: "Lunch",
    },
    {
      name: "Köttbuller – Classic",
      nameEn: "Meatballs – Classic",
      description:
        "Klassische Fleischbällchen in Rahmsauce, dazu Bratkartoffeln und Preiselbeermarmelade.",
      descriptionEn:
        "Classic meatballs in cream sauce, served with fried potatoes and lingonberry jam.",
      price: "11,50€",
      category: "Lunch",
      categoryEn: "Lunch",
    },
    {
      name: "Köttbuller – Geflügel",
      nameEn: "Meatballs – Poultry",
      description:
        "Saftige Geflügelbällchen in Napolisauce, serviert mit Wildreis, frischem Fjordkräutersalat, eingelegter roter Zwiebel und Balsamico-Dressing.",
      descriptionEn:
        "Juicy poultry meatballs in Napoli sauce, served with wild rice, fresh fjord herb salad, pickled red onion and balsamic dressing.",
      price: "13,90€",
      category: "Lunch",
      categoryEn: "Lunch",
    },

    // Suppen
    {
      name: "Rode Tomatensuppe",
      nameEn: "Red Tomato Soup",
      description: "Sonnengereiften Tomaten und Basilikumöl und Mozzarella.",
      descriptionEn: "Sun-ripened tomatoes with basil oil and mozzarella.",
      price: "8,90€",
      category: "Suppen",
      categoryEn: "Soups",
    },
    {
      name: "Herzhafte Gulaschsuppe",
      nameEn: "Hearty Goulash Soup",
      description: "Mit Rind und Rauchigem Paprikapulver.",
      descriptionEn: "With beef and smoky paprika powder.",
      price: "8,90€",
      category: "Suppen",
      categoryEn: "Soups",
    },
    {
      name: "Vegane Milde Karotte Ingwersuppe",
      nameEn: "Vegan Mild Carrot Ginger Soup",
      description: "Aus knackigen Karotten und frischem Ingwer.",
      descriptionEn: "Made from crisp carrots and fresh ginger.",
      price: "8,90€",
      category: "Suppen",
      categoryEn: "Soups",
    },
    {
      name: "Gelbe Kokos Linsensuppe",
      nameEn: "Yellow Coconut Lentil Soup",
      description: "Feine Linsen mit cremiger Kokosmilch und frischem Koriander.",
      descriptionEn: "Fine lentils with creamy coconut milk and fresh coriander.",
      price: "8,90€",
      category: "Suppen",
      categoryEn: "Soups",
    },

    // Nudeln
    {
      name: "Varm Nudeln",
      nameEn: "Warm Noodles",
      description:
        "Tagliatelle mit cremigem Skyr-Joghurt und einer nordisch-frischen Kräutermischung, Knoblauchöl und zartem Hackfleisch.",
      descriptionEn:
        "Tagliatelle with creamy Skyr yogurt and a Nordic-fresh herb mixture, garlic oil and tender minced meat.",
      price: "9,90€",
      category: "Nudeln",
      categoryEn: "Pasta",
    },
    {
      name: "Veggi Varm Nudeln",
      nameEn: "Veggie Warm Noodles",
      description:
        "Tagliatelle mit cremigem Skyr-Joghurt, einer feinen nordischen Kräutermischung, Knoblauchöl und herzhaftem vegetarischem Hack.",
      descriptionEn:
        "Tagliatelle with creamy Skyr yogurt, a fine Nordic herb mixture, garlic oil and hearty vegetarian mince.",
      price: "10,90€",
      category: "Nudeln",
      categoryEn: "Pasta",
    },

    // Flade
    {
      name: "Klassisk Flade",
      nameEn: "Classic Flatbread",
      description:
        "Mit cremiger Crème Fraîche, würzigem Käse, feinem Knoblauchöl und frischer Petersilie.",
      descriptionEn:
        "With creamy crème fraîche, spicy cheese, fine garlic oil and fresh parsley.",
      price: "7,90€",
      category: "Flade",
      categoryEn: "Flatbread",
    },
    {
      name: "Lakse Flade",
      nameEn: "Salmon Flatbread",
      description:
        "Zart geräucherter Lachs trifft auf Dill-Crème Fraîche, Zitronenzeste und ein Stück Limette – eine frische Kombination.",
      descriptionEn:
        "Tender smoked salmon meets dill crème fraîche, lemon zest and a piece of lime – a fresh combination.",
      price: "11,90€",
      category: "Flade",
      categoryEn: "Flatbread",
    },
    {
      name: "Kanel Flade",
      nameEn: "Cinnamon Flatbread",
      description: "Süßer Genuss mit Zimt und Puderzucker – einfach unwiderstehlich.",
      descriptionEn: "Sweet treat with cinnamon and powdered sugar – simply irresistible.",
      price: "5,50€",
      category: "Flade",
      categoryEn: "Flatbread",
    },

    // Fisch
    {
      name: "Fish & Chips",
      nameEn: "Fish & Chips",
      description:
        "Knusprige Fish Bites mit Pommes und einem Spritzer frischer Zitrone, dazu cremiger Dilldip.",
      descriptionEn:
        "Crispy fish bites with fries and a splash of fresh lemon, served with creamy dill dip.",
      price: "8,90€",
      category: "Fisch",
      categoryEn: "Fish",
    },
    {
      name: "Polarperle",
      nameEn: "Polar Pearl",
      description:
        "Zartes Seelachsfilet auf Wildreis mit feiner Dillsauce, begleitet von einem Ruccola-Walnuss-Salat mit aromatischem Balsamico-Dressing.",
      descriptionEn:
        "Tender pollock fillet on wild rice with fine dill sauce, accompanied by a rocket-walnut salad with aromatic balsamic dressing.",
      price: "15,90€",
      category: "Fisch",
      categoryEn: "Fish",
    },

    // Milchreis
    {
      name: "Apfelzauber",
      nameEn: "Apple Magic",
      description:
        "Warmer Milchreis mit fruchtigem Apfelkompott, karamelliger Sauce und gerösteten Mandelstiften.",
      descriptionEn:
        "Warm rice pudding with fruity apple compote, caramel sauce and roasted almond slivers.",
      price: "6,20€",
      category: "Milchreis",
      categoryEn: "Rice Pudding",
    },
    {
      name: "Weiße Vanille",
      nameEn: "White Vanilla",
      description:
        "Cremiger Milchreis mit samtiger Vanillesauce und feinen weißen Schokoraspeln.",
      descriptionEn:
        "Creamy rice pudding with velvety vanilla sauce and fine white chocolate shavings.",
      price: "4,90€",
      category: "Milchreis",
      categoryEn: "Rice Pudding",
    },
    {
      name: "Klassisk",
      nameEn: "Classic",
      description: "Traditioneller Milchreis, verfeinert mit Zimt und Zucker.",
      descriptionEn: "Traditional rice pudding, refined with cinnamon and sugar.",
      price: "3,90€",
      category: "Milchreis",
      categoryEn: "Rice Pudding",
    },

    // Kinder Hauptmahlzeiten
    {
      name: "Pasta Basta",
      nameEn: "Pasta Basta",
      description:
        "Zarte Tagliatelle mit milden Geflügel-Hackbällchen und leckerer Napoli-Tomatensauce. Auf Wunsch mit frischem Basilikum.",
      descriptionEn:
        "Tender tagliatelle with mild poultry meatballs and delicious Napoli tomato sauce. Optional with fresh basil.",
      price: "6,20€",
      category: "Kinder Hauptmahlzeiten",
      categoryEn: "Kids Main Meals",
    },
    {
      name: "Pasta Lover",
      nameEn: "Pasta Lover",
      description:
        "Zarte Tagliatelle in cremiger Hackfleischsauce, verfeinert mit Skyr Joghurt für einen besonderen Geschmack.",
      descriptionEn:
        "Tender tagliatelle in creamy minced meat sauce, refined with Skyr yogurt for a special taste.",
      price: "5,90€",
      category: "Kinder Hauptmahlzeiten",
      categoryEn: "Kids Main Meals",
    },
    {
      name: "Küsten Knusper",
      nameEn: "Coastal Crunch",
      description:
        "Knusprige Fischfilet-Bites mit Kartoffelschiffchen, knackigen Gurken- oder Karottensticks und einem leckeren Dip nach Wahl.",
      descriptionEn:
        "Crispy fish fillet bites with potato boats, crunchy cucumber or carrot sticks and a delicious dip of your choice.",
      price: "6,90€",
      category: "Kinder Hauptmahlzeiten",
      categoryEn: "Kids Main Meals",
    },

    // Frühstück
    {
      name: "Der kleine Franzose",
      nameEn: "The Little Frenchman",
      description: "Frisch gebackenes Croissant, Butter und Marmelade oder Nutella.",
      descriptionEn: "Freshly baked croissant, butter and jam or Nutella.",
      price: "4,90€",
      category: "Frühstück",
      categoryEn: "Breakfast",
    },
    {
      name: "Käse – sooo lecker",
      nameEn: "Cheese – sooo delicious",
      description:
        "Ofenfrische Brötchen mit Bergkäse, Gouda, Brie, eingelegter Mozzarella, Joghurt, hausgemachter Granola und fruchtigem Spiegel.",
      descriptionEn:
        "Oven-fresh rolls with mountain cheese, Gouda, Brie, pickled mozzarella, yogurt, homemade granola and fruity jam.",
      price: "13,10€",
      category: "Frühstück",
      categoryEn: "Breakfast",
    },
    {
      name: "Der Herzliche",
      nameEn: "The Hearty One",
      description:
        "Ofenfrische Brötchen mit einer Auswahl feiner Wurstaufschnitte, Gouda, Butter, Marmelade, eingelegten Mini-Gurken, Joghurt und hausgemachter Granola.",
      descriptionEn:
        "Oven-fresh rolls with a selection of fine cold cuts, Gouda, butter, jam, pickled mini cucumbers, yogurt and homemade granola.",
      price: "13,90€",
      category: "Frühstück",
      categoryEn: "Breakfast",
    },
    {
      name: "Gekochtes Ei",
      nameEn: "Boiled Egg",
      description: "Einfach, klassisch und lecker.",
      descriptionEn: "Simple, classic and delicious.",
      price: "1,40€",
      category: "Frühstück",
      categoryEn: "Breakfast",
    },
    {
      name: "Klassisch Rührei",
      nameEn: "Classic Scrambled Eggs",
      description: "Fluffiges Rührei – pur oder mit Beilagen.",
      descriptionEn: "Fluffy scrambled eggs – plain or with sides.",
      price: "5,90€",
      category: "Frühstück",
      categoryEn: "Breakfast",
      options: [
        { name: "Speckstreifen", nameEn: "Bacon strips", price: "3,30€" },
        { name: "Sucuk", nameEn: "Sucuk", price: "3,00€" },
        { name: "Weißkäse", nameEn: "White cheese", price: "2,50€" },
      ],
    },
    {
      name: "Männersache",
      nameEn: "Man's Business",
      description:
        "Herzhaftes Männerfrühstück mit knusprigen Bratkartoffeln, zwei Spiegeleiern, Speck, Mini-Gurken, geröstetem Brot. Empfehlung mit Veltins Pils oder Püllecken.",
      descriptionEn:
        "Hearty men's breakfast with crispy fried potatoes, two fried eggs, bacon, mini cucumbers, toasted bread. Recommendation with Veltins Pils or Püllecken.",
      price: "12,20€ + 2,00€ für Pils",
      category: "Frühstück",
      categoryEn: "Breakfast",
    },
    {
      name: "Shakshuka",
      nameEn: "Shakshuka",
      description:
        "Würzige Eier in Tomaten-Spitzpaprika-Sauce mit Zwiebeln und Butter, verfeinert mit Chili, dazu geröstetes Brot.",
      descriptionEn:
        "Spicy eggs in tomato-bell pepper sauce with onions and butter, refined with chili, served with toasted bread.",
      price: "11,75€",
      category: "Frühstück",
      categoryEn: "Breakfast",
    },
    {
      name: "Frauenpower",
      nameEn: "Women Power",
      description:
        "Tomatencreme mit frischer Avocado, Cocktailtomaten und Pinienkernen auf Sauerteigbrot, mit Zitronenspritzer, Dip und einem Glas gekühltem Sekt (0,1 l).",
      descriptionEn:
        "Tomato cream with fresh avocado, cherry tomatoes and pine nuts on sourdough bread, with lemon splash, dip and a glass of chilled sparkling wine (0.1 l).",
      price: "13,20€ + 2,00€ Sekt",
      category: "Frühstück",
      categoryEn: "Breakfast",
    },

    // Frühstück Extras
    {
      name: "Extras Frühstück",
      nameEn: "Breakfast Extras",
      category: "Frühstück Extras",
      categoryEn: "Breakfast Extras",
      options: [
        { name: "Gouda", nameEn: "Gouda", price: "0,60€" },
        { name: "Schafskäse", nameEn: "Sheep's cheese", price: "2,50€" },
        { name: "3x Speckstreifen", nameEn: "3x Bacon strips", price: "3,30€" },
        { name: "Sucuk", nameEn: "Sucuk", price: "3,00€" },
        { name: "Spiegelei", nameEn: "Fried egg", price: "2,00€" },
        { name: "Extra Rührei", nameEn: "Extra scrambled eggs", price: "3,50€" },
        { name: "Bagel/Croissant", nameEn: "Bagel/Croissant", price: "2,00€" },
        { name: "Scheibe Brot", nameEn: "Slice of bread", price: "1,20€" },
        { name: "Nutella", nameEn: "Nutella", price: "1,50€" },
        { name: "Marmelade", nameEn: "Jam", price: "1,50€" },
        { name: "Butter 10g", nameEn: "Butter 10g", price: "0,70€" },
      ],
    },

    // Bowls
    {
      name: "Acai Bowl",
      nameEn: "Acai Bowl",
      description:
        "Fruchtige Acai mit Banane und Himbeeren, verfeinert mit hausgemachter Granola, Kokoschips, Kakaonibs, Pekanüssen und einem Hauch von Limette mit Thaibasilikum-Zucker.",
      descriptionEn:
        "Fruity acai with banana and raspberries, refined with homemade granola, coconut chips, cacao nibs, pecans and a hint of lime with Thai basil sugar.",
      price: "12,90€",
      category: "Bowls",
      categoryEn: "Bowls",
    },
    {
      name: "Passionsf. Bowl – Sun Bowl",
      nameEn: "Passion Fruit Bowl – Sun Bowl",
      description:
        "Erfrischende Passionsfrucht trifft auf Granatapfel, Weintrauben, hausgemachte Granola, gepufften Quinoa und Cashews, abgerundet mit einer Zitronenmelisse-Honig Sauce.",
      descriptionEn:
        "Refreshing passion fruit meets pomegranate, grapes, homemade granola, puffed quinoa and cashews, rounded off with a lemon balm-honey sauce.",
      price: "10,90€",
      category: "Bowls",
      categoryEn: "Bowls",
    },
    {
      name: "Skyr Joghurt Bowl – Weißgold",
      nameEn: "Skyr Yogurt Bowl – White Gold",
      description:
        "Cremiger Skyr-Joghurt kombiniert mit Weintrauben, Granatapfel, hausgemachter Granola, Walnüssen und einem Hauch frischer Zitronenverbene mit Zuckerstaub.",
      descriptionEn:
        "Creamy Skyr yogurt combined with grapes, pomegranate, homemade granola, walnuts and a hint of fresh lemon verbena with sugar dust.",
      price: "8,90€",
      category: "Bowls",
      categoryEn: "Bowls",
    },

    // Vegan Baby
    {
      name: "Rühr mich nicht an",
      nameEn: "Don't Touch Me",
      description: "Warmes, veganes Rührei – ganz pur oder mit Extras.",
      descriptionEn: "Warm, vegan scrambled eggs – completely pure or with extras.",
      price: "5,90€",
      category: "Vegan Baby",
      categoryEn: "Vegan Baby",
      options: [
        { name: "Tomaten", nameEn: "Tomatoes", price: "1,50€" },
        { name: "Zwiebeln", nameEn: "Onions", price: "1,00€" },
      ],
    },
    {
      name: "Goldstück",
      nameEn: "Gold Piece",
      description:
        "Aromatische Shakshuka mit Tomaten, Spitzpaprika und Zwiebeln, serviert auf geröstetem Brot, verfeinert mit Chilli-Flocken.",
      descriptionEn:
        "Aromatic shakshuka with tomatoes, bell peppers and onions, served on toasted bread, refined with chili flakes.",
      price: "11,70€",
      category: "Vegan Baby",
      categoryEn: "Vegan Baby",
    },
    {
      name: "Der New Yorker",
      nameEn: "The New Yorker",
      description:
        "Knuspriger Bagel mit cremiger Avocado, Tomatencreme, frischem Basilikum, Rucola, Walnüssen und Granatapfelkernen.",
      descriptionEn:
        "Crispy bagel with creamy avocado, tomato cream, fresh basil, rocket, walnuts and pomegranate seeds.",
      price: "5,60€",
      category: "Vegan Baby",
      categoryEn: "Vegan Baby",
    },

    // Bread & Bun
    {
      name: "Pfannen-Broiche",
      nameEn: "Pan Brioche",
      description:
        "Fluffiges Brioche mit einem Stück Butter, Honig und frischem Obst. Empfehlung: Salz Caramel Speiseeis.",
      descriptionEn:
        "Fluffy brioche with a piece of butter, honey and fresh fruit. Recommendation: Salt caramel ice cream.",
      price: "7,80€",
      category: "Bread & Bun",
      categoryEn: "Bread & Bun",
      options: [{ name: "Kugel Eis", nameEn: "Scoop of ice cream", price: "1,80€" }],
    },
    {
      name: "Pfeffer Salz Bagel",
      nameEn: "Pepper Salt Bagel",
      description:
        "Frischer Bagel mit cremigem Frischkäse, Paprika und würzigem Rucola.",
      descriptionEn:
        "Fresh bagel with creamy cream cheese, paprika and spicy rocket.",
      price: "5,20€",
      category: "Bread & Bun",
      categoryEn: "Bread & Bun",
    },
    {
      name: "Tom Tom Bagel",
      nameEn: "Tom Tom Bagel",
      description:
        "Bagel belegt mit aromatischer Tomatencreme, Basilikum und einem Spiegelei. Optional mit Bacon oder Serrano Schinken.",
      descriptionEn:
        "Bagel topped with aromatic tomato cream, basil and a fried egg. Optional with bacon or Serrano ham.",
      price: "5,40€",
      category: "Bread & Bun",
      categoryEn: "Bread & Bun",
    },
    {
      name: "Croissant",
      nameEn: "Croissant",
      description:
        "Ofenfrisches Croissant mit Rührei, halber Avocado, knackigen Sprossen, Salz und Pfeffer.",
      descriptionEn:
        "Oven-fresh croissant with scrambled eggs, half avocado, crunchy sprouts, salt and pepper.",
      price: "7,70€",
      category: "Bread & Bun",
      categoryEn: "Bread & Bun",
    },
    {
      name: "Croissants Deluxe",
      nameEn: "Croissant Deluxe",
      description:
        "Croissant deluxe mit Serrano-Schinken, Rührei, halber Avocado, Salz und Pfeffer.",
      descriptionEn:
        "Deluxe croissant with Serrano ham, scrambled eggs, half avocado, salt and pepper.",
      price: "13,20€",
      category: "Bread & Bun",
      categoryEn: "Bread & Bun",
    },

    // Bagels & More
    {
      name: "Blueberry-Lemon Dream",
      nameEn: "Blueberry-Lemon Dream",
      description:
        "Warmer Pancake mit Vanillesauce, frischer Zitronenmelisse, Blaubeeren, Blaubeersauce, Puderzucker. Empfehlung: Honig-Mandeleis (+1,80€).",
      descriptionEn:
        "Warm pancake with vanilla sauce, fresh lemon balm, blueberries, blueberry sauce, powdered sugar. Recommendation: Honey-almond ice cream (+1.80€).",
      price: "7,90€",
      category: "Pancakes",
      categoryEn: "Pancakes",
    },
    {
      name: "Pink Kiss",
      nameEn: "Pink Kiss",
      description:
        "Saftige Himbeeren, knuspriges Baiser, fruchtiger Spiegel, Sahne. Optional Vanilleeis (+1,80€).",
      descriptionEn:
        "Juicy raspberries, crispy meringue, fruity jam, cream. Optional vanilla ice cream (+1.80€).",
      price: "8,90€",
      category: "Pancakes",
      categoryEn: "Pancakes",
    },
    {
      name: "Pistachio Love",
      nameEn: "Pistachio Love",
      description:
        "Haselnusscreme, Pistazien, Sahne. Optional Pistazieneis (+1,80€).",
      descriptionEn:
        "Hazelnut cream, pistachios, cream. Optional pistachio ice cream (+1.80€).",
      price: "9,90€",
      category: "Pancakes",
      categoryEn: "Pancakes",
    },
    {
      name: "Klassiker Pancake",
      nameEn: "Classic Pancake",
      description:
        "Knuspriger Pancake mit Puderzucker. Optional mit Eis nach Wahl.",
      descriptionEn:
        "Crispy pancake with powdered sugar. Optional with ice cream of your choice.",
      category: "Pancakes",
      categoryEn: "Pancakes",
    },

    // Ice Cream
    {
      name: "Eissorten",
      nameEn: "Ice Cream Flavors",
      category: "Speiseeis",
      categoryEn: "Ice Cream",
      options: [
        { name: "Vanille", nameEn: "Vanilla", price: "1,00€/1,80€" },
        { name: "Schokolade", nameEn: "Chocolate", price: "1,00€/1,80€" },
        { name: "Belgische Schokolade", nameEn: "Belgian Chocolate", price: "1,00€/1,80€" },
        { name: "Erdbeer-Sorbet", nameEn: "Strawberry Sorbet", price: "1,00€/1,80€" },
        { name: "Stracciatella", nameEn: "Stracciatella", price: "1,00€/1,80€" },
        { name: "Zitronen Sorbet", nameEn: "Lemon Sorbet", price: "1,00€/1,80€" },
        { name: "Sahnecreme", nameEn: "Cream", price: "1,00€/1,80€" },
        { name: "Joghurt", nameEn: "Yogurt", price: "1,00€/1,80€" },
        { name: "Salz Karamel", nameEn: "Salt Caramel", price: "1,00€/1,80€" },
        { name: "Honig Melonen Sorbet", nameEn: "Honey Melon Sorbet", price: "1,00€/1,80€" },
        { name: "Waldfrucht Sorbet", nameEn: "Forest Fruit Sorbet", price: "1,00€/1,80€" },
        { name: "Fruchtjoghurt", nameEn: "Fruit Yogurt", price: "1,00€/1,80€" },
        { name: "Honigmandel", nameEn: "Honey Almond", price: "1,00€/1,80€" },
        { name: "Schoko Bitter", nameEn: "Dark Chocolate", price: "1,00€/1,80€" },
        { name: "Mocca", nameEn: "Mocha", price: "1,00€/1,80€" },
        { name: "Lavendel", nameEn: "Lavender", price: "1,00€/1,80€" },
        { name: "Oreo", nameEn: "Oreo", price: "1,00€/1,80€" },
        { name: "Snickers", nameEn: "Snickers", price: "1,00€/1,80€" },
        { name: "Haselnuss", nameEn: "Hazelnut", price: "1,00€/1,80€" },
        { name: "Amarena", nameEn: "Amarena", price: "1,00€/1,80€" },
        { name: "Tiramisu", nameEn: "Tiramisu", price: "1,00€/1,80€" },
        { name: "Pistazie", nameEn: "Pistachio", price: "1,00€/1,80€" },
        { name: "Mango Sorbet", nameEn: "Mango Sorbet", price: "1,00€/1,80€" },
        { name: "Cookies", nameEn: "Cookies", price: "1,00€/1,80€" },
      ],
    },

    // Ice Cream Sundaes
    {
      name: "Spaghetti",
      nameEn: "Spaghetti",
      description: "Sahne, Vanilleeis, Erdbeersoße, weiße Schokoraspeln",
      descriptionEn: "Cream, vanilla ice cream, strawberry sauce, white chocolate shavings",
      price: "8,90€",
      category: "Eisbecher",
      categoryEn: "Ice Cream Sundaes",
    },
    {
      name: "Moccanote",
      nameEn: "Moccanote",
      description: "Moccaeis, Sahneeis, Sahne, Kaffeesoße, Moccabohnen",
      descriptionEn: "Mocha ice cream, cream ice cream, cream, coffee sauce, mocha beans",
      price: "9,40€",
      category: "Eisbecher",
      categoryEn: "Ice Cream Sundaes",
    },
    {
      name: "Pistaziengrün",
      nameEn: "Pistachio Green",
      description:
        "Pistazieneis, Vanilleeis, Sahne, Pistaziensoße und Schokosoße, Pistazien",
      descriptionEn:
        "Pistachio ice cream, vanilla ice cream, cream, pistachio sauce and chocolate sauce, pistachios",
      price: "12,90€",
      category: "Eisbecher",
      categoryEn: "Ice Cream Sundaes",
    },
    {
      name: "Mangocrush",
      nameEn: "Mango Crush",
      description: "Mangosorbet, Vanilleeis, Sahne, Mangosoße, Mangostücke",
      descriptionEn: "Mango sorbet, vanilla ice cream, cream, mango sauce, mango pieces",
      price: "9,10€",
      category: "Eisbecher",
      categoryEn: "Ice Cream Sundaes",
    },
  ];
  