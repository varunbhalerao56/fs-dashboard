// Categories data structure
export const categories = [
	{
		name: "Environmental Sustainability & Climate Resilience",
		icon: "🌿",
		focus_areas: "Water, Fisheries, Waste, Forests & Soil",
		sub_categories: [
			{ name: "Climate Resilience & Adaptation", track_measures: "Poor, Fair, Good, Excellent" },
			{ name: "Biodiversity", track_measures: "Poor, Fair, Good, Excellent" },
			{ name: "Forest Preservation", track_measures: "Coverage %" },
			{ name: "Regenerative Forest Ecosystem", track_measures: "Poor, Fair, Good, Excellent" },
			{ name: "Sustainable Fisheries Ecosystem", track_measures: "Rate of fishing relative to amount of fishes" },
			{ name: "Sustainable Farming Practices", track_measures: "Poor, Fair, Good, Excellent" },
			{ name: "Waste Management (Circular Economy)", track_measures: "% of materials recycled" },
			{ name: "Sustainable Water Management", track_measures: "Poor, Fair, Good, Excellent" }
		]
	},
	{
		name: "Healthy Lives & Well-Being",
		icon: "🏥",
		focus_areas: "Healthcare",
		sub_categories: [
			{ name: "Physical Health", track_measures: "Poor, Fair, Good, Excellent" },
			{ name: "Mental Health", track_measures: "Poor, Fair, Good, Excellent" },
			{ name: "Access To Clean Food", track_measures: "Yes / No" },
			{ name: "Access To Quality Healthcare Services", track_measures: "Yes / No, Poor, Fair, Good, Excellent" },
			{ name: "Sense Of Purpose", track_measures: "no sense, some sense, good sense, amazing sense" },
			{ name: "Subjective View Of Health", track_measures: "Poor, Fair, Good, Excellent" },
			{ name: "Level Of Stress", track_measures: "Unbearable, Bearable, Just Fine, No Stress" }
		]
	},
	{
		name: "Education & Digital Inclusion",
		icon: "📚",
		focus_areas: "Education",
		sub_categories: [
			{ name: "Education Quality & Attainment", track_measures: "Yes / No, Poor, Fair, Good, Excellent" },
			{ name: "Access to Special Needs Education", track_measures: "Yes / No" },
			{ name: "Lifelong Learning & Skills", track_measures: "None, Little, Avg, High" },
			{ name: "Literacy (Reading & Writing)", track_measures: "Basic, Intermediate, Proficient, Advanced" },
			{ name: "Future-proof Education", track_measures: "None, Little, Avg, High" },
			{ name: "Digital Literacy", track_measures: "None, Basic, Full Standard" }
		]
	},
	{
		name: "Economic Prosperity & Equity",
		icon: "💼",
		focus_areas: "Food & Ag, Livelihoods & Enterprise",
		sub_categories: [
			{ name: "Income (Relative to needs)", track_measures: "low-income, lower-middle, upper-middle, high-income" },
			{ name: "Employment / Self-Employment", track_measures: "% employed, self-employed, unemployed, underemployed" },
			{ name: "Sustainable Livelihood Security", track_measures: "None, Little, Avg, High" },
			{ name: "Sustainable Enterprises", track_measures: "None, Little, Avg, High" },
			{ name: "Equity & Opportunity", track_measures: "Poor, Fair, Good, Excellent" },
			{ name: "Security (Food & Economic)", track_measures: "None, Little, Avg, High" },
			{ name: "Diversified Economy", track_measures: "None, Little, Avg, High" },
			{ name: "Sustainable Eco-Tourism", track_measures: "None, Little, Avg, High" }
		]
	},
	{
		name: "Cultural & Spiritual Well-Being",
		icon: "🎭",
		focus_areas: "Creative Arts, Culture",
		sub_categories: [
			{ name: "Spiritual Practice & Meaning", track_measures: "None, Little, Avg, High" },
			{ name: "Preservation Of Ancestral Wisdom", track_measures: "None, Little, Avg, High" },
			{ name: "Integration Of Local & Modern Knowledge", track_measures: "None, Little, Avg, High" },
			{ name: "Arts & Cultural Vitality", track_measures: "Number of cultural events per year" },
			{ name: "Preservation Of Local Languages", track_measures: "None, Little, Avg, High" }
		]
	},
	{
		name: "Community & Social Cohesion",
		icon: "🤝",
		focus_areas: "Community Building",
		sub_categories: [
			{ name: "Sense Of Belonging", track_measures: "None, Little, Avg, High" },
			{ name: "Community Support", track_measures: "None, Little, Avg, High" },
			{ name: "Safety & Security", track_measures: "Yes / No" },
			{ name: "Community Spirit & Empowerment", track_measures: "None, Little, Avg, High" }
		]
	},
	{
		name: "Good Governance & Participation",
		icon: "🏛️",
		focus_areas: "Civic Engagement",
		sub_categories: [
			{ name: "Civic Engagement", track_measures: "% of population contributing" },
			{ name: "Transparency", track_measures: "None, Little, Avg, High" },
			{ name: "Integrity", track_measures: "None, Little, Avg, High" },
			{ name: "Institutional Trust", track_measures: "None, Little, Avg, High" },
			{ name: "Competence", track_measures: "Poor, Fair, Good, Excellent" },
			{ name: "Judicial System (Non-Indigenous)", track_measures: "Poor, Fair, Good, Excellent" },
			{ name: "Judicial System (Indigenous)", track_measures: "Poor, Fair, Good, Excellent" },
			{ name: "Resource Alignment", track_measures: "Poor, Fair, Good, Excellent, % allocated" },
			{ name: "Policy Alignment", track_measures: "Poor, Fair, Good, Excellent" }
		]
	},
	{
		name: "Infrastructure & Future Readiness",
		icon: "🏗️",
		focus_areas: "Infrastructure, Energy",
		sub_categories: [
			{ name: "Renewable Energy", track_measures: "% of renewable energy generation" },
			{ name: "Transportation & Mobility", track_measures: "% population with access" },
			{ name: "Access To Affordable Energy", track_measures: "% population with access" },
			{ name: "Future Energy Demands", track_measures: "Poor, Fair, Good, Excellent" },
			{ name: "Disaster Readiness", track_measures: "Poor, Fair, Good, Excellent" },
			{ name: "Internet Access", track_measures: "% population with access" },
			{ name: "Clean Water Access", track_measures: "% population with access" },
			{ name: "Right-Sized Infrastructure", track_measures: "% of appropriate projects" },
			{ name: "Affordable Housing", track_measures: "% population with access" },
			{ name: "Digital Connectivity", track_measures: "% population with access" }
		]
	}
];

// Location data
export const locations = ["Sabah (State-wide)", "Kota Kinabalu", "Sandakan", "Tawau", "Lahad Datu", "Keningau", "Kudat", "Beaufort", "Sipitang"];

export const townsByDistrict: Record<string, string[]> = {
	"Sabah (State-wide)": ["All Towns"],
	"Kota Kinabalu": ["Kota Kinabalu City", "Penampang", "Putatan", "Papar"],
	Sandakan: ["Sandakan Town", "Kinabatangan", "Beluran", "Tongod"],
	Tawau: ["Tawau Town", "Semporna", "Kunak", "Lahad Datu"],
	"Lahad Datu": ["Lahad Datu Town", "Silam", "Tungku"],
	Keningau: ["Keningau Town", "Tulid", "Apin-Apin"],
	Kudat: ["Kudat Town", "Pitas", "Kota Marudu"],
	Beaufort: ["Beaufort Town", "Kuala Penyu", "Sipitang"],
	Sipitang: ["Sipitang Town", "Sindumin", "Long Pasia"]
};

// Utility function to generate random data
export function generateRandomData() {
	const getRandomQuality = () => {
		const qualities = ["Poor", "Fair", "Good", "Excellent"];
		return qualities[Math.floor(Math.random() * qualities.length)];
	};

	const getRandomScale = () => {
		const scales = ["None", "Little", "Avg", "High"];
		return scales[Math.floor(Math.random() * scales.length)];
	};

	const getRandomYesNo = () => {
		return Math.random() > 0.5 ? "Yes" : "No";
	};

	const getRandomPercentage = () => {
		return Math.floor(Math.random() * 100);
	};

	const getRandomCount = () => {
		return Math.floor(Math.random() * 50);
	};

	const qualityToPercentage = (quality: string) => {
		switch (quality) {
			case "Excellent":
				return 85 + Math.floor(Math.random() * 15);
			case "Good":
				return 65 + Math.floor(Math.random() * 20);
			case "Fair":
				return 45 + Math.floor(Math.random() * 20);
			case "Poor":
				return 20 + Math.floor(Math.random() * 25);
			default:
				return 50;
		}
	};

	const scaleToPercentage = (scale: string) => {
		switch (scale) {
			case "High":
				return 75 + Math.floor(Math.random() * 25);
			case "Avg":
				return 50 + Math.floor(Math.random() * 25);
			case "Little":
				return 25 + Math.floor(Math.random() * 25);
			case "None":
				return Math.floor(Math.random() * 25);
			default:
				return 50;
		}
	};

	return {
		"Environmental Sustainability & Climate Resilience": {
			"Climate Resilience & Adaptation": (() => {
				const val = getRandomQuality();
				return { value: val, percentage: qualityToPercentage(val) };
			})(),
			Biodiversity: (() => {
				const val = getRandomQuality();
				return { value: val, percentage: qualityToPercentage(val) };
			})(),
			"Forest Preservation": (() => {
				const val = getRandomPercentage();
				return { value: val, percentage: val };
			})(),
			"Regenerative Forest Ecosystem": (() => {
				const val = getRandomQuality();
				return { value: val, percentage: qualityToPercentage(val) };
			})(),
			"Sustainable Fisheries Ecosystem": (() => {
				const val = getRandomQuality();
				return { value: val, percentage: qualityToPercentage(val) };
			})(),
			"Sustainable Farming Practices": (() => {
				const val = getRandomQuality();
				return { value: val, percentage: qualityToPercentage(val) };
			})(),
			"Waste Management (Circular Economy)": (() => {
				const val = getRandomPercentage();
				return { value: val, percentage: val };
			})(),
			"Sustainable Water Management": (() => {
				const val = getRandomQuality();
				return { value: val, percentage: qualityToPercentage(val) };
			})()
		},
		"Healthy Lives & Well-Being": {
			"Physical Health": (() => {
				const val = getRandomQuality();
				return { value: val, percentage: qualityToPercentage(val) };
			})(),
			"Mental Health": (() => {
				const val = getRandomQuality();
				return { value: val, percentage: qualityToPercentage(val) };
			})(),
			"Access To Clean Food": (() => {
				const val = getRandomYesNo();
				return { value: val, percentage: val === "Yes" ? 80 + Math.random() * 20 : 20 + Math.random() * 40 };
			})(),
			"Access To Quality Healthcare Services": (() => {
				const val = getRandomQuality();
				return { value: val, percentage: qualityToPercentage(val) };
			})(),
			"Sense Of Purpose": (() => {
				const val = getRandomScale();
				return { value: val, percentage: scaleToPercentage(val) };
			})(),
			"Subjective View Of Health": (() => {
				const val = getRandomQuality();
				return { value: val, percentage: qualityToPercentage(val) };
			})(),
			"Level Of Stress": (() => {
				const val = getRandomQuality();
				return { value: val, percentage: qualityToPercentage(val) };
			})()
		},
		"Education & Digital Inclusion": {
			"Education Quality & Attainment": (() => {
				const val = getRandomQuality();
				return { value: val, percentage: qualityToPercentage(val) };
			})(),
			"Access to Special Needs Education": (() => {
				const val = getRandomYesNo();
				return { value: val, percentage: val === "Yes" ? 70 + Math.random() * 30 : 10 + Math.random() * 50 };
			})(),
			"Lifelong Learning & Skills": (() => {
				const val = getRandomScale();
				return { value: val, percentage: scaleToPercentage(val) };
			})(),
			"Literacy (Reading & Writing)": (() => {
				const val = getRandomQuality();
				return { value: val, percentage: qualityToPercentage(val) };
			})(),
			"Future-proof Education": (() => {
				const val = getRandomScale();
				return { value: val, percentage: scaleToPercentage(val) };
			})(),
			"Digital Literacy": (() => {
				const val = getRandomScale();
				return { value: val, percentage: scaleToPercentage(val) };
			})()
		},
		"Economic Prosperity & Equity": {
			"Income (Relative to needs)": (() => {
				const val = getRandomQuality();
				return { value: val, percentage: qualityToPercentage(val) };
			})(),
			"Employment / Self-Employment": (() => {
				const val = getRandomPercentage();
				return { value: val, percentage: val };
			})(),
			"Sustainable Livelihood Security": (() => {
				const val = getRandomScale();
				return { value: val, percentage: scaleToPercentage(val) };
			})(),
			"Sustainable Enterprises": (() => {
				const val = getRandomScale();
				return { value: val, percentage: scaleToPercentage(val) };
			})(),
			"Equity & Opportunity": (() => {
				const val = getRandomQuality();
				return { value: val, percentage: qualityToPercentage(val) };
			})(),
			"Security (Food & Economic)": (() => {
				const val = getRandomScale();
				return { value: val, percentage: scaleToPercentage(val) };
			})(),
			"Diversified Economy": (() => {
				const val = getRandomScale();
				return { value: val, percentage: scaleToPercentage(val) };
			})(),
			"Sustainable Eco-Tourism": (() => {
				const val = getRandomScale();
				return { value: val, percentage: scaleToPercentage(val) };
			})()
		},
		"Cultural & Spiritual Well-Being": {
			"Spiritual Practice & Meaning": (() => {
				const val = getRandomScale();
				return { value: val, percentage: scaleToPercentage(val) };
			})(),
			"Preservation Of Ancestral Wisdom": (() => {
				const val = getRandomScale();
				return { value: val, percentage: scaleToPercentage(val) };
			})(),
			"Integration Of Local & Modern Knowledge": (() => {
				const val = getRandomScale();
				return { value: val, percentage: scaleToPercentage(val) };
			})(),
			"Arts & Cultural Vitality": (() => {
				const val = getRandomCount();
				return { value: val, percentage: Math.min(val * 2, 100) };
			})(),
			"Preservation Of Local Languages": (() => {
				const val = getRandomScale();
				return { value: val, percentage: scaleToPercentage(val) };
			})()
		},
		"Community & Social Cohesion": {
			"Sense Of Belonging": (() => {
				const val = getRandomScale();
				return { value: val, percentage: scaleToPercentage(val) };
			})(),
			"Community Support": (() => {
				const val = getRandomScale();
				return { value: val, percentage: scaleToPercentage(val) };
			})(),
			"Safety & Security": (() => {
				const val = getRandomYesNo();
				return { value: val, percentage: val === "Yes" ? 70 + Math.random() * 30 : 30 + Math.random() * 40 };
			})(),
			"Community Spirit & Empowerment": (() => {
				const val = getRandomScale();
				return { value: val, percentage: scaleToPercentage(val) };
			})()
		},
		"Good Governance & Participation": {
			"Civic Engagement": (() => {
				const val = getRandomPercentage();
				return { value: val, percentage: val };
			})(),
			Transparency: (() => {
				const val = getRandomScale();
				return { value: val, percentage: scaleToPercentage(val) };
			})(),
			Integrity: (() => {
				const val = getRandomScale();
				return { value: val, percentage: scaleToPercentage(val) };
			})(),
			"Institutional Trust": (() => {
				const val = getRandomScale();
				return { value: val, percentage: scaleToPercentage(val) };
			})(),
			Competence: (() => {
				const val = getRandomQuality();
				return { value: val, percentage: qualityToPercentage(val) };
			})(),
			"Judicial System (Non-Indigenous)": (() => {
				const val = getRandomQuality();
				return { value: val, percentage: qualityToPercentage(val) };
			})(),
			"Judicial System (Indigenous)": (() => {
				const val = getRandomQuality();
				return { value: val, percentage: qualityToPercentage(val) };
			})(),
			"Resource Alignment": (() => {
				const val = getRandomQuality();
				return { value: val, percentage: qualityToPercentage(val) };
			})(),
			"Policy Alignment": (() => {
				const val = getRandomQuality();
				return { value: val, percentage: qualityToPercentage(val) };
			})()
		},
		"Infrastructure & Future Readiness": {
			"Renewable Energy": (() => {
				const val = getRandomPercentage();
				return { value: val, percentage: val };
			})(),
			"Transportation & Mobility": (() => {
				const val = getRandomPercentage();
				return { value: val, percentage: val };
			})(),
			"Access To Affordable Energy": (() => {
				const val = getRandomPercentage();
				return { value: val, percentage: val };
			})(),
			"Future Energy Demands": (() => {
				const val = getRandomQuality();
				return { value: val, percentage: qualityToPercentage(val) };
			})(),
			"Disaster Readiness": (() => {
				const val = getRandomQuality();
				return { value: val, percentage: qualityToPercentage(val) };
			})(),
			"Internet Access": (() => {
				const val = getRandomPercentage();
				return { value: val, percentage: val };
			})(),
			"Clean Water Access": (() => {
				const val = getRandomPercentage();
				return { value: val, percentage: val };
			})(),
			"Right-Sized Infrastructure": (() => {
				const val = getRandomPercentage();
				return { value: val, percentage: val };
			})(),
			"Affordable Housing": (() => {
				const val = getRandomPercentage();
				return { value: val, percentage: val };
			})(),
			"Digital Connectivity": (() => {
				const val = getRandomPercentage();
				return { value: val, percentage: val };
			})()
		}
	};
}

// Utility functions
export function getMetricType(trackMeasures: string): string {
	if (trackMeasures.includes("%")) return "percentage";
	if (trackMeasures.includes("Yes / No")) return "yesno";
	if (trackMeasures.includes("Poor, Fair, Good, Excellent")) return "quality";
	if (trackMeasures.includes("None, Little, Avg, High")) return "scale";
	if (trackMeasures.includes("Number of")) return "count";
	return "other";
}

export function getProgressColor(value: string | number, type: string): string {
	if (type === "percentage") {
		if (typeof value === "number" && value >= 80) return "bg-success-500";
		if (typeof value === "number" && value >= 60) return "bg-primary-500";
		if (typeof value === "number" && value >= 40) return "bg-accent-500";
		return "bg-muted-500";
	}

	if (type === "quality") {
		switch (value) {
			case "Excellent":
				return "bg-primary-500";
			case "Good":
				return "bg-success-500";
			case "Fair":
				return "bg-accent-500";
			case "Poor":
				return "bg-muted-500";
			default:
				return "bg-muted-500";
		}
	}

	if (type === "scale") {
		switch (value) {
			case "High":
				return "bg-primary-500";
			case "Avg":
				return "bg-success-500";
			case "Little":
				return "bg-accent-500";
			case "None":
				return "bg-muted-500";
			default:
				return "bg-muted-500";
		}
	}

	return "bg-primary-500";
}
