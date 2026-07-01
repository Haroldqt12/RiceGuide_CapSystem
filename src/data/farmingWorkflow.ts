export interface StageInstruction {
  step: number;
  text: string;
}

export interface FarmingStage {
  stageId: number;
  name: string;
  durationDays: number;
  description: string;
  instructions: StageInstruction[];
  materials: string[];
  tips: string[];
  weatherConsiderations: string;
  risks: string[];
}

export const RICE_FARMING_STAGES: FarmingStage[] = [
  {
    stageId: 1,
    name: "Land Preparation",
    durationDays: 5,
    description: "Clear debris and prepare the field for plowing.",
    instructions: [
      { step: 1, text: "Remove existing weeds and stubbles from previous harvest." },
      { step: 2, text: "Repair dikes/levees to ensure good water retention." },
      { step: 3, text: "Flood the field for a few days to soften the soil." }
    ],
    materials: ["Bolo/Scythe", "Shovel", "Water source"],
    tips: ["A well-levelled field saves water and reduces weeds by up to 40%."],
    weatherConsiderations: "Avoid clearing during heavy rain to prevent soil erosion.",
    risks: ["Weed regrowth if not cleared properly"]
  },
  {
    stageId: 2,
    name: "Soil Preparation",
    durationDays: 5,
    description: "Plow, harrow, and level the field.",
    instructions: [
      { step: 1, text: "Plow the field to incorporate weeds and stubbles into the soil." },
      { step: 2, text: "Harrow the field 2-3 times at 1-week intervals." },
      { step: 3, text: "Level the field using a wooden plank or mechanical leveler." }
    ],
    materials: ["Hand tractor or Carabao", "Plow", "Harrow", "Levelling board"],
    tips: ["Wait 7-10 days between plowing and harrowing to let weeds decompose."],
    weatherConsiderations: "Ideal to do this when there is sufficient water but no heavy storms.",
    risks: ["Uneven water distribution if poorly levelled"]
  },
  {
    stageId: 3,
    name: "Seed Selection & Treatment",
    durationDays: 3,
    description: "Select high-quality seeds and soak them for germination.",
    instructions: [
      { step: 1, text: "Select certified seeds recommended for your area." },
      { step: 2, text: "Perform a flotation test to remove empty grains (use salt water)." },
      { step: 3, text: "Soak seeds for 24 hours, then incubate in a warm place for 24-48 hours." }
    ],
    materials: ["Certified seeds", "Salt", "Water basin", "Sacks for incubation"],
    tips: ["Using certified seeds can increase yield by 10-15%."],
    weatherConsiderations: "Incubate in a shaded, warm area protected from rain.",
    risks: ["Poor germination if water is too cold or seeds dry out"]
  },
  {
    stageId: 4,
    name: "Nursery Preparation",
    durationDays: 14,
    description: "Prepare the seedbed and sow pre-germinated seeds.",
    instructions: [
      { step: 1, text: "Prepare a raised seedbed about 1 meter wide." },
      { step: 2, text: "Broadcast pre-germinated seeds evenly." },
      { step: 3, text: "Maintain shallow water and protect from birds/rats." }
    ],
    materials: ["Pre-germinated seeds", "Organic fertilizer", "Netting (optional)"],
    tips: ["Sow thinly so seedlings grow robust and healthy."],
    weatherConsiderations: "Protect from heavy rain that can wash away seeds.",
    risks: ["Bird attacks, rat infestation, damping-off disease"]
  },
  {
    stageId: 5,
    name: "Transplanting",
    durationDays: 5,
    description: "Transplant seedlings into the main field.",
    instructions: [
      { step: 1, text: "Pull seedlings gently to avoid root damage." },
      { step: 2, text: "Plant 2-3 seedlings per hill at 2-3 cm depth." },
      { step: 3, text: "Maintain a spacing of 20x20 cm." }
    ],
    materials: ["Seedlings", "Planting guide/string"],
    tips: ["Transplant seedlings when they are 15-21 days old for better tillering."],
    weatherConsiderations: "Cloudy days are best for transplanting to reduce transplant shock.",
    risks: ["Golden apple snail attack on young seedlings"]
  },
  {
    stageId: 6,
    name: "Irrigation Management",
    durationDays: 7, 
    description: "Establish the proper water depth for early growth.",
    instructions: [
      { step: 1, text: "Maintain water depth at 2-3 cm after transplanting." },
      { step: 2, text: "Gradually increase to 5 cm as plants grow taller." },
      { step: 3, text: "Check dikes daily for leaks." }
    ],
    materials: ["Water pump (if rain-fed is insufficient)", "Spade for dike repair"],
    tips: ["Use Alternate Wetting and Drying (AWD) later to save water and reduce methane."],
    weatherConsiderations: "If heavy rain is expected, drain excess water to prevent complete submergence.",
    risks: ["Water shortage leading to weed growth, flooding"]
  },
  {
    stageId: 7,
    name: "First Fertilizer Application",
    durationDays: 3,
    description: "Apply basal fertilizer or early top-dressing.",
    instructions: [
      { step: 1, text: "Drain field slightly before applying." },
      { step: 2, text: "Apply complete fertilizer (e.g., 14-14-14) evenly." },
      { step: 3, text: "Re-flood field the next day." }
    ],
    materials: ["Complete Fertilizer (14-14-14)", "Gloves/Mask"],
    tips: ["Apply when leaves are dry to prevent fertilizer burn."],
    weatherConsiderations: "Do not apply if heavy rain is forecast to prevent runoff.",
    risks: ["Fertilizer runoff, uneven application"]
  },
  {
    stageId: 8,
    name: "Weed Management",
    durationDays: 5,
    description: "Control weeds manually or chemically.",
    instructions: [
      { step: 1, text: "Identify dominant weed types in the field." },
      { step: 2, text: "Perform manual weeding or apply appropriate herbicide." },
      { step: 3, text: "Maintain water level to suppress new weed growth." }
    ],
    materials: ["Herbicide (optional)", "Knapsack sprayer", "Rotary weeder"],
    tips: ["Early weeding (within 20-30 days) prevents yield loss."],
    weatherConsiderations: "For herbicides, apply on a calm, dry day.",
    risks: ["Herbicide toxicity to rice if misapplied, weed competition"]
  },
  {
    stageId: 9,
    name: "Second Fertilizer Application",
    durationDays: 3,
    description: "Apply top-dress fertilizer (Urea) at Panicle Initiation.",
    instructions: [
      { step: 1, text: "Check Leaf Color Chart (LCC) to determine N needs." },
      { step: 2, text: "Apply Urea evenly across the field." },
      { step: 3, text: "Maintain optimal water level." }
    ],
    materials: ["Urea Fertilizer (46-0-0)", "Leaf Color Chart"],
    tips: ["Timing is critical: apply right at panicle initiation for maximum grains."],
    weatherConsiderations: "Apply when there is no impending heavy rain.",
    risks: ["Excessive nitrogen leading to lodging and disease susceptibility"]
  },
  {
    stageId: 10,
    name: "Pest & Disease Monitoring",
    durationDays: 14,
    description: "Scout for pests and diseases during the critical reproductive stage.",
    instructions: [
      { step: 1, text: "Walk through the field in a zigzag pattern." },
      { step: 2, text: "Check base of stems for Brown Planthoppers." },
      { step: 3, text: "Inspect leaves for spots, blast, or blight." }
    ],
    materials: ["Magnifying glass", "Notebook/App for logging"],
    tips: ["Don't spray pesticides immediately. Conserve beneficial insects like spiders."],
    weatherConsiderations: "High humidity and frequent rain increase disease risks.",
    risks: ["Stem borer, Brown planthopper, Rice blast, Bacterial leaf blight"]
  },
  {
    stageId: 11,
    name: "Crop Monitoring",
    durationDays: 14,
    description: "Monitor grain filling and manage late-stage irrigation.",
    instructions: [
      { step: 1, text: "Ensure field is well-watered during flowering." },
      { step: 2, text: "Start draining the field 1-2 weeks before expected harvest." },
      { step: 3, text: "Watch out for late-season pests like rice bugs." }
    ],
    materials: [],
    tips: ["Terminal drainage hardens the soil, making harvesting easier."],
    weatherConsiderations: "Typhoons at this stage can cause severe lodging.",
    risks: ["Water stress during flowering causes empty grains, Lodging"]
  },
  {
    stageId: 12,
    name: "Harvesting",
    durationDays: 5,
    description: "Cut and gather the mature rice crop.",
    instructions: [
      { step: 1, text: "Harvest when 80-85% of grains are straw-colored." },
      { step: 2, text: "Cut stems leaving a short stubble." },
      { step: 3, text: "Thresh immediately or within 24 hours if hand-harvested." }
    ],
    materials: ["Sickle", "Combine Harvester (if mechanized)"],
    tips: ["Delaying harvest increases shattering losses."],
    weatherConsiderations: "Harvest during dry, sunny weather to avoid wet grains.",
    risks: ["Grain shattering, bad weather ruining harvest"]
  },
  {
    stageId: 13,
    name: "Post-Harvest",
    durationDays: 5,
    description: "Dry, clean, and store the harvested palay.",
    instructions: [
      { step: 1, text: "Dry grains to 14% moisture content for safe storage." },
      { step: 2, text: "Clean grains using a winnower or blower." },
      { step: 3, text: "Store in clean, dry sacks in a well-ventilated area." }
    ],
    materials: ["Drying mat/pavement", "Moisture meter", "Sacks"],
    tips: ["Do not dry directly on highways; use mats to prevent contamination and damage."],
    weatherConsiderations: "Requires intense sun for sun-drying; use mechanical dryers during rainy season.",
    risks: ["Molding, insect infestation in storage, grain discoloration"]
  }
];
