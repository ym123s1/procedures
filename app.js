// =========================================================
// Hardcoded Q&A Protocols (Verbatim official texts)
// =========================================================

const PROTOCOLS = [
    {
        question: "הנחיות הכנה והנחיות צום לחדר ניתוח",
        answer: "חדר ניתוח   צום שש שעות לפני הפרוצדורה, עד שעתיים לפני מותר לשתות מים.  חדר ניתוח מתחילים את הניתוח הראשון ב:8:00, קיצור תורים בשעה 15:00.  יש למלא במחשב\"CHECK LIST\" מעבר לחדר ניתוח בתוך המעקב הסיעודי.  נוספים: חלוק, עירוי, תיק רפואי, חתימת אפוטרופוס לפי הצורך. מנות דם לפי הצורך- לוודא סוג והצלבה עדכני+ 2 מנות דם מוכנות."
    },
    {
        question: "הנחיות לכל סוגי בדיקות ה-CT (עם או ללא חומר ניגוד)",
        answer: "טופוגרפיה ממוחשבת CT   יש להסתכל בהזמנה של הרופא המטפל:  (CT) בהזרקת חומר ניגוד - צום ארבע שעות, מותר לשתות מים עד שעה לפני. עירוי ורוד או ירוק.  (CT) ללא חומר ניגוד - אין צורך בצום."
    },
    {
        question: "הנחיות מיוחדות ל-CT בטן או פרוטוקול אבנים",
        answer: "טופוגרפיה ממוחשבת CT   (CT) בטן - שתיית חומר ניגוד (טלבריקס), צום ארבע שעות, עד שעה לפני מותר לשתות מים.  פרוטוקול הכנה למטופל WITH רגישות ליוד הכנה על פי הוראת רופא ברשומה הרפואית.  כאשר קראטנין של המטופל 1.3- 2.4 MG/DL יש להתייעץ עם הרופא המטפל או נפרולוג.  (CT) פרוטוקול אבנים - שתיית 3 כוסות מים וסגירת קטטר. מטופל ללא קטטר ישתה במכון."
    },
    {
        question: "הנחיות צום והכנה להכנסת צנתרים ונקזים באנגיוגרפיה",
        answer: "אנגיוגרפיה   הכנסת צנתרים מסוג: (Central line, Hickman, port-a-cat, Permacath) - צום שש שעות, מותר לשתות מים עד שעתיים לפני הפרוצדורה.  הכנסת צנתר מסוג (PICC LINE) - אין צורך בצום.  הכנסת או החלפת נקזים: דרכי מרה, כליות, קולקציות - צום שש שעות, מותר לשתות מים עד שעתיים לפני הפרוצדורה.  נוספים: חלוק, עירוי, תיק רפואי, חתימת אפוטרופוס לפי הצורך. מתן אנטיביוטיקה מקדימה לפי הצורך."
    },
    {
        question: "הנחיות הכנה לפני ואחרי בדיקת גסטרוסקופיה",
        answer: "מכון גסטרוסקופיה   גסטרוסקופיה(כולל את שאר הבדיקות דרך הפה ERCP,EUS...)- צום שש שעות, מותר לשתות מים עד שעתיים לפני הפרוצדורה. לאחר הפרוצדורה יש להיות בצום כחצי שעה ולהתחיל כלכלה בזהירות לפי יכולת המטופל.  נוספים: חלוק, עירוי, תיק רפואי, חתימת אפוטרופוס לפי הצורך."
    },
    {
        question: "הנחיות הכנה לקולונוסקופיה וסיגמואידוסקופיה",
        answer: "מכון גסטרוסקופיה   קולונוסקופיה- מטרת ההכנה צואה צלולה ללא תוכן.  סיגמואידוסקופיה- בד\"כ אין צורך בצום אלא אם יש הוראה רפואית אחרת. נדרש לעשות שני חוקני פליט אנמה כשעתיים לפני הפרוצדה, בהפרש של רבע שעה.  נוספים: חלוק, עירוי, תיק רפואי, חתימת אפוטרופוס לפי הצורך."
    },
    {
        question: "הנחיות צום והזנה להכנסת פג (PEG)",
        answer: "מכון גסטרוסקופיה   הכנסת פג - צום מחצות הלילה (לפחות 8 ש') תרופות קבועות ב6 בבוקר עם חצי כוס מים. לאחר הפרוצדורה- לאחר ארבע שעות לתת 100cc מים כל שעה עד להגעה ל 500cc מים.  התחלת הזנה בפורמולה למחרת בבוקר או כעבור 10 שעות.  נוספים: חלוק, עירוי, תיק רפואי, חתימת אפוטרופוס לפי הצורך."
    },
    {
        question: "הנחיות הכנה וציוד לבדיקת ברונכוסקופיה",
        answer: "מכון ברונכוסקופיה   ברונכוסקופיה במכון - צום שש שעות, מותר לשתות מים עד שעתיים לפני הפרוצדורה.  ברוכנכוסקופיה ליד מיטת המטופל.  נוספים: חלוק, עירוי, חתימת אפוטרופוס לפי הצורך. כל מטופל צריך לרדת על מיטה עם בלון חמצן."
    },
    {
        question: "הנחיות צום והכנה למיפויים ולבדיקות PET CT",
        answer: "רפואה גרעינית   מיפוי ראות + מיפוי עצמות - אין צורך בצום, נדרש עירוי.  (PET CT) - סוג הבדיקה נקבע באישור של היחידה לרפואה גרעינית שני סוגים נפוצים:  (PET CT) קרדיאלי - עשר שעות צום מלא, למעט מים ותרופות הכרחיות. אין לתת דקסטרוז דרך הווריד ב24ש' קודם הבדיקה. בנוסף - עירוי.  (PET CT (FDG)) - חמש שעות טרם הבדיקה צום מלא למעט מים."
    },
    {
        question: "הנחיות צום והכנה לאולטרסאונד בטן או כליות",
        answer: "אולטרסאונד   אולטרסאונד בטן סקירה שלמה - שש שעות צום מותר לשתות מים עד שעה לפני הבדיקה.  כליות - שעה לפני הבדיקה יש לשתות שלוש כוסות מים ואין לרוקן את השלפוחית."
    },
    {
        question: "הנחיות הכנה לצילום וושט קיבה או ביופסיית ריאה",
        answer: "שיקופים(RF) רנטגן   צילום וושט קיבה (בליעת בריום) - יש להיות בצום מחצות בלילה שלפני הבדיקה ללא מים וללא עישון.  ביופסיית ריאה - צום שש שעות, מותר לשתות מים עד שעתיים לפני הפרוצדורה.  שאר השיקופים ללא צום."
    },
    {
        question: "הנחיות צום, טפסים ואישורים לבדיקת MRI",
        answer: "MRI   (MRI) בהרדמה - צום שש שעות, מותר לשתות מים עד שעתיים לפני הפרוצדורה. חתימה על טפסים מיוחדים להרדמה.  (MRI) ללא הרדמה - אין כל צורך בצום. טופס מתכות - יש למלא על ידי המטופל או אפוטרופוס. כל מטופל עם מתכות צריך אישור של ד\"ר אפלבאום. נוספים: עירוי, חתימת אפוטרופוס לפי הצורך."
    },
    {
        question: "הנחיות הכנה לבדיקות אקו לב (TEE, באבלס, דבוטומין)",
        answer: "מכון הלב   אקו דרך הוושט (TEE) - צום שש שעות מאוכל ושתייה, עירוי, אפוטרופוס לפי הצורך. צום לאחר הפרוצדורה לפי הנחיות.  אקו באבלס - עירוי ביד ימין בקיפול של היד.  אקו דבוטומין - עירוי."
    },
    {
        question: "הנחיות לציסטוסקופיה, דופלקס בטן, ביופסיית מח עצם או בדיקת עיניים",
        answer: "ציסטוסקופיה - אין צורך בצום.  דופלקס בטן - צום שש שעות מאוכל ושתיה.  ביופסיית מח עצם - צום שש שעות לפני הפרוצדורה, עד שעתיים לפני מותר לשתות מים. נוספים: עירוי על מנת לקבל חומר לטשטוש, אפוטרופוס לפי הצורך, לאחר הביופסיה נדרש אישור מתי לרדת מהמיטה.  בדיקת עיניים - לפי הצורך והוראת רופא- הרחבת אישונים חצי שעה לפני הבדיקה עם MIDRMIN (נמצא במקרר) טיפה אחת בכל עין."
    },
    {
        question: "רשימת הציוד הנדרש להכנסת זונדה",
        answer: "פרוצדורות סיעודיות  - ציוד להכנסת זונדה   זונדה   מזרק זונדה   עזרקאין   קיבוע   סטטוסקופ - אופציונאלי   בסיום הפרוצדורה יש לוודא מיקום הזונדה"
    },
    {
        question: "רשימת הציוד הנדרש להכנסת קטטר",
        answer: "פרוצדורות סיעודיות  - ציוד להכנסת קטטר   קטטר   סט לשאיבה (ישנם סטים עם כפפות סטריליות וחומר חיטוי בפנים)   כפפות סטריליות   שקית שתן   קיבוע   עזרקאין סטרילי   חומר חיטוי   מזרק 10cc   (NS 10cc)"
    },
    {
        question: "רשימת הציוד הנדרש להכנסת נקז",
        answer: "פרוצדורות רפואיות עזרה של אחות  - ציוד להכנסת נקז   נקז - בדרך כלל יביא הרופא שמבצע את הפרוצדורה   ערקה סטרילית להכנסת ליין/נקז   צ'מבר - מלא במים במקומות המיועדים   אלכוכסידין   לידוקאין   מזרקים של 10cc   (10cc NS)   מחט שאיבה   מחט הזרקה   פלסטר   תפר   טגדרם   מד סימנים   (US) - אופציונאלי   לוודא שהוזמן צילום חזה   לשלוח בדיקות בהתאם לדרישת הרופא"
    },
    {
        question: "רשימת הציוד הנדרש להכנסת ליין מרכזי",
        answer: "פרוצדורות רפואיות עזרה של אחות  - ציוד להכנסת ליין מרכזי   ליין - בהתאם לנדרש   ערקה סטרילית להכנסת ליין/נקז   אלכוכסידין   לידוקאין   מזרקים של 10cc   (10cc NS)   מחט שאיבה   מחט הזרקה   פלסטר   תפר   טגדרם   מד סימנים   (- US) אופציונאלי   לוודא שהוזמן צילום חזה"
    },
    {
        question: "פעולות הכנה, ציוד ומעקב לפרוצדורת אקסטובציה",
        answer: "פרוצדורות רפואיות עזרה של אחות  - אקסטובציה   לפני: אינהלציה + סאקשיין + סטרואידים? להוציא אוויר מהבלונית ולשמוע דלף. זונדה לניקוז, צום.  להכין ליד המטופל: (F.M) אינהלציה. עגלת החייאה.  אחרי: מוניטור שעוקב גם אחרי מספר נשימות."
    },
    {
        question: "פעולות הכנה, אישורים, דם ובדיקות לטרכיאוסטמיה",
        answer: "פרוצדורות רפואיות עזרה של אחות  - טרכיאוסטמיה   לעדכן את המשפחה   הסכמות לניתוח + הרדמה   דם לסוג בתוקף ומנות מוכנות   המוגלובין ותפקודי קרישה מאותו יום   הפסקת אנטיקואגולציה   עירוי - אנטיביוטיקה פרופילקטית   צל\"ח לאחר הפרוצדורה"
    }
];

// =========================================================
// Formatting Utilities
// =========================================================

/**
 * Formats the raw answer string by replacing multiple spaces with newlines
 * to keep each bullet point separated cleanly as a continuous plain text string.
 */
function formatProtocolResponse(answerText) {
    return answerText.replace(/\s{2,}/g, '\n');
}

// =========================================================
// Initialization & Events
// =========================================================

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('protocolsContainer');
    if (!container) return;

    PROTOCOLS.forEach((protocol, index) => {
        // Create protocol card
        const card = document.createElement('div');
        card.className = 'protocol-card';
        card.id = `protocol-card-${index}`;

        // Trigger Button
        const trigger = document.createElement('button');
        trigger.className = 'protocol-trigger';
        trigger.setAttribute('aria-expanded', 'false');
        trigger.setAttribute('aria-controls', `protocol-content-${index}`);

        const questionSpan = document.createElement('span');
        questionSpan.className = 'protocol-question';
        questionSpan.textContent = protocol.question;

        const arrowDiv = document.createElement('div');
        arrowDiv.className = 'protocol-arrow';
        arrowDiv.innerHTML = `
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
        `;

        trigger.appendChild(questionSpan);
        trigger.appendChild(arrowDiv);

        // Content Wrapper (Accordion)
        const wrapper = document.createElement('div');
        wrapper.className = 'protocol-content-wrapper';
        wrapper.id = `protocol-content-${index}`;

        const content = document.createElement('div');
        content.className = 'protocol-content';

        const inner = document.createElement('div');
        inner.className = 'protocol-content-inner';
        
        // Render response as clean, plain text
        const textContainer = document.createElement('div');
        textContainer.className = 'protocol-response';
        textContainer.textContent = formatProtocolResponse(protocol.answer);
        inner.appendChild(textContainer);
        
        content.appendChild(inner);
        wrapper.appendChild(content);
        
        card.appendChild(trigger);
        card.appendChild(wrapper);
        container.appendChild(card);

        // Click Event listener
        trigger.addEventListener('click', () => {
            const isExpanded = card.classList.contains('expanded');
            
            // Collapse all other cards first to prevent UI clutter
            document.querySelectorAll('.protocol-card').forEach(otherCard => {
                if (otherCard !== card) {
                    otherCard.classList.remove('expanded');
                    otherCard.querySelector('.protocol-trigger').setAttribute('aria-expanded', 'false');
                }
            });

            // Toggle current card
            if (isExpanded) {
                card.classList.remove('expanded');
                trigger.setAttribute('aria-expanded', 'false');
            } else {
                card.classList.add('expanded');
                trigger.setAttribute('aria-expanded', 'true');
            }
        });
    });

    // Create no-results message card
    const noResultsCard = document.createElement('div');
    noResultsCard.className = 'no-results-card hidden';
    noResultsCard.textContent = 'לא נמצאו פרוטוקולים התואמים לחיפוש שלך.';
    container.appendChild(noResultsCard);

    // Search functionality
    const searchInput = document.getElementById('keywordSearch');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.trim().toLowerCase();
            let visibleCount = 0;

            // Collapse all cards to prevent height conflicts and jumpy layout shifts during typing
            document.querySelectorAll('.protocol-card').forEach(card => {
                card.classList.remove('expanded');
                const trigger = card.querySelector('.protocol-trigger');
                if (trigger) trigger.setAttribute('aria-expanded', 'false');
            });

            PROTOCOLS.forEach((protocol, index) => {
                const card = document.getElementById(`protocol-card-${index}`);
                if (!card) return;

                // Match question text only
                const matchQuestion = protocol.question.toLowerCase().includes(query);

                if (matchQuestion) {
                    card.classList.remove('hidden');
                    visibleCount++;
                } else {
                    card.classList.add('hidden');
                }
            });

            // Toggle no-results card visibility
            if (visibleCount === 0) {
                noResultsCard.classList.remove('hidden');
            } else {
                noResultsCard.classList.add('hidden');
            }
        });
    }

    // Modal elements and logic
    const modalOverlay = document.getElementById('modalOverlay');
    const contactModal = document.getElementById('contactModal');
    const termsModal = document.getElementById('termsModal');

    const contactLink = document.getElementById('contactLink');
    const termsLink = document.getElementById('termsLink');

    const closeContactBtn = document.getElementById('closeContactBtn');
    const closeTermsBtn = document.getElementById('closeTermsBtn');

    function openModal(modal) {
        if (modalOverlay && modal) {
            modalOverlay.classList.add('active');
            modal.classList.add('active');
        }
    }

    function closeModal() {
        if (modalOverlay) modalOverlay.classList.remove('active');
        if (contactModal) contactModal.classList.remove('active');
        if (termsModal) termsModal.classList.remove('active');
    }

    if (contactLink) {
        contactLink.addEventListener('click', (e) => {
            e.preventDefault();
            openModal(contactModal);
        });
    }

    if (termsLink) {
        termsLink.addEventListener('click', (e) => {
            e.preventDefault();
            openModal(termsModal);
        });
    }

    if (closeContactBtn) {
        closeContactBtn.addEventListener('click', closeModal);
    }

    if (closeTermsBtn) {
        closeTermsBtn.addEventListener('click', closeModal);
    }

    if (modalOverlay) {
        modalOverlay.addEventListener('click', closeModal);
    }
});
