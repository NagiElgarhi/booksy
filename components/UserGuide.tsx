import React, { useState, useEffect } from 'react';
import { 
    ArrowLeftIcon,
    BookOpenIcon,
    ChatBubbleIcon,
    ClipboardListIcon,
    EditIcon,
    InfoIcon,
    LightbulbIcon,
    PrayerTimeIcon,
    QuestionMarkCircleIcon,
    SearchIcon,
    SummarizeIcon,
    RomanTempleIcon,
    CalculatorIcon,
    BookshelfIcon,
    MailIcon,
} from './icons';

const Sketch: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="mt-4 w-full border-t border-dashed border-yellow-800/20 pt-4 flex justify-center">
        <div className="p-3 rounded-lg bg-[var(--color-background-secondary)] w-full max-w-md">
            {children}
        </div>
    </div>
);

const FeatureCard: React.FC<{
    icon: React.FC<{className?: string}>;
    title: string;
    description: string;
    sketch: React.ReactNode;
}> = ({ icon: Icon, title, description, sketch }) => (
    <div className="bg-white/60 p-6 rounded-2xl shadow-lg border border-gray-200/50 flex flex-col items-center gap-6 text-center">
        <div className="flex flex-col sm:flex-row items-center gap-6 w-full">
            <div className="flex-shrink-0 w-20 h-20 rounded-full flex items-center justify-center bg-gradient-to-br from-[#D4AF37]/20 to-[#6d4c11]/20">
                <Icon className="w-10 h-10 golden-text" />
            </div>
            <div className="flex-grow sm:text-right">
                <h3 className="text-2xl font-bold mb-2 golden-text">{title}</h3>
                <p className="text-base" style={{ color: 'var(--color-text-brown-dark)', whiteSpace: 'pre-wrap' }}>{description}</p>
            </div>
        </div>
        {sketch}
    </div>
);


interface UserGuideProps {
    onBack: () => void;
    onRequestPurchase: () => void;
}


const UserGuide: React.FC<UserGuideProps> = ({ onBack, onRequestPurchase }) => {

    return (
        <div className="w-full max-w-5xl mx-auto rounded-2xl p-[2px] bg-gradient-to-br from-[#D4AF37] to-[#6d4c11]">
            <div 
                className="w-full h-full text-center rounded-[calc(1rem-2px)] p-6 sm:p-8"
                style={{ backgroundImage: 'var(--color-background-container-gradient)' }}
            >
                <div className="flex justify-between items-center mb-8">
                    <button onClick={onBack} className="flex items-center gap-2 px-4 py-2 text-base font-semibold text-white rounded-lg hover:opacity-90 transition-colors" style={{ backgroundImage: 'linear-gradient(to bottom right, #FBBF24, #262626)' }}>
                        <ArrowLeftIcon className="w-5 h-5"/>
                        <span>العودة</span>
                    </button>
                    <h2 className="text-4xl font-bold golden-text flex items-center gap-3">
                        <InfoIcon className="w-10 h-10"/>
                        دليل المستخدم
                    </h2>
                    <div className="w-24"></div> {/* Spacer */}
                </div>

                <div className="text-lg text-center p-4 mb-8 bg-black/5 rounded-lg border border-yellow-800/20">
                    <p className="font-bold text-dark-gold-gradient">مرحبًا بك في مساعدك الدراسي الشامل!</p>
                    <p className="text-base text-gray-700 mt-2">
                        هذا التطبيق مصمم ليكون شريكك الذكي في رحلتك التعليمية. إنه لا يقرأ المستندات فحسب، بل يفهمها بعمق. يمكنك تحميل أي ملف—سواء كان <b className="text-red-600">PDF</b>، أو مستند <b className="text-blue-600">Word</b>، أو حتى <b className="text-green-600">صورة</b> لنص—والتطبيق سيقوم بشرحه لك. هل لديك نوتة موسيقية معقدة أو معادلات رياضية صعبة؟ لا مشكلة، التطبيق قادر على تحليل النصوص المختلفة وشرحها بطريقة لم تختبرها من قبل. استعد لتجربة تعليمية فريدة تحول المواد المعقدة إلى معرفة واضحة ومفهومة.
                    </p>
                </div>

                <div className="space-y-8">
                    <FeatureCard 
                        icon={RomanTempleIcon}
                        title="كتابك التفاعلي"
                        description="حوّل القراءة السلبية إلى تجربة تعليمية نشطة. ابدأ بتحميل أي ملف PDF. سيقوم نظامنا الذكي بتحليل بنيته تلقائيًا، مقسمًا إياه إلى فصول ودروس منطقية. من هناك، يمكنك اختيار أي درس لتوليد شرح مفصل وعميق لمحتواه، معززًا بالأمثلة التوضيحية عند الحاجة. بعد استيعاب الشرح، يمكنك إنشاء مجموعة متنوعة من الأسئلة التفاعلية (اختيار من متعدد، صح وخطأ، أسئلة مفتوحة) لاختبار فهمك وترسيخ المعلومات. هذه الأداة هي قلب التطبيق، وهي مصممة لتأخذك من مجرد قراءة النص إلى التفاعل معه وفهمه على مستوى أعمق، مما يضمن استعدادك الكامل لأي اختبار أو مناقشة."
                        sketch={
                            <Sketch>
                                <div className="text-sm font-semibold text-gray-500 mb-2">شكل توضيحي:</div>
                                <div className="space-y-2">
                                    <div className="p-2 border rounded-md text-right bg-white">الفصل 1: المقدمة</div>
                                    <div className="p-2 border rounded-md text-right bg-white flex justify-between items-center">
                                        <span>الدرس 1.1: التاريخ</span>
                                        <div className="px-2 py-1 text-xs bg-blue-500 text-white rounded">توليد الدرس</div>
                                    </div>
                                </div>
                            </Sketch>
                        }
                    />
                     <FeatureCard 
                        icon={RomanTempleIcon}
                        title="إسألني (Ask Me)"
                        description="تخيل أن لديك خبيرًا قد قرأ مستنداتك بالكامل ومستعد للإجابة عن أي سؤال. هذه هي قوة أداة 'إسألني'. قم بتحميل أي ملف—سواء كان تقريرًا معقدًا بصيغة PDF، مقالًا في ملف Word، أو حتى صورة التقطتها لصفحة من كتاب—واطرح أسئلتك مباشرة. سيقوم الذكاء الاصطناعي بالبحث داخل محتوى المستند الذي قدمته فقط ليمنحك إجابات دقيقة ومستندة إلى السياق. لا مزيد من البحث اليدوي الممل أو التخمين. سواء كنت تريد توضيحًا لنقطة معينة، أو البحث عن معلومة محددة، أو فهم علاقة بين مفهومين، 'إسألني' هو طريقك الأسرع للحصول على إجابات موثوقة من داخل نصوصك."
                        sketch={
                            <Sketch>
                                <div className="text-sm font-semibold text-gray-500 mb-2">شكل توضيحي:</div>
                                <div className="p-2 border rounded-md text-right bg-white">س: ما هي أهم نقطة في الصفحة 5؟</div>
                                <div className="p-2 border rounded-md text-right bg-blue-100">ج: بناءً على النص، النقطة الأهم هي...</div>
                            </Sketch>
                        }
                    />
                    <FeatureCard 
                        icon={RomanTempleIcon}
                        title="إختبرني (Test Me)"
                        description="حوّل أي مستند PDF إلى أداة تقييم قوية. هذه الميزة مصممة خصيصًا لمساعدتك على التحضير للاختبارات عن طريق تحويل المواد الدراسية إلى اختبارات شاملة. ببساطة، قم بتحميل ملفك، اختر الفصل الذي تريد التركيز عليه، وسيقوم الذكاء الاصطناعي بإنشاء مجموعة متنوعة من الأسئلة التي تغطي جميع جوانب المحتوى. ستحصل على أسئلة اختيار من متعدد، صح وخطأ، أسئلة مفتوحة، والمزيد، مما يضمن اختبار فهمك من زوايا مختلفة. بعد الإجابة، ستحصل على نتيجة فورية مع تصحيحات مفصلة من الذكاء الاصطناعي للإجابات الخاطئة. إنها الطريقة المثلى لقياس معرفتك وتحديد نقاط ضعفك قبل يوم الامتحان."
                        sketch={
                            <Sketch>
                                 <div className="text-sm font-semibold text-gray-500 mb-2">شكل توضيحي:</div>
                                <div className="p-2 border rounded-md text-right bg-white">س: ما هي عاصمة مصر؟</div>
                                <div className="space-y-1 mt-1">
                                    <div className="p-1 border rounded text-right bg-gray-50">أ) القاهرة</div>
                                    <div className="p-1 border rounded text-right bg-gray-50">ب) الإسكندرية</div>
                                </div>
                            </Sketch>
                        }
                    />
                    <FeatureCard 
                        icon={RomanTempleIcon}
                        title="ملخصات (Summaries)"
                        description="استوعب المفاهيم الأساسية لأي فصل في ثوانٍ. عندما تكون في عجلة من أمرك أو تحتاج إلى مراجعة سريعة، تتيح لك أداة الملخصات استخلاص الأفكار الرئيسية من أي نص طويل. قم بتحميل ملفك واختيار الفصل، وسيقوم الذكاء الاصطناعي بقراءته وتقديم ملخص دقيق ومركز. ليس هذا فحسب، بل يمكنك أيضًا توجيه أسلوب التلخيص—سواء كنت تفضله على شكل نقاط، أو فقرة متماسكة، أو بأسلوب أكاديمي. جميع الملخصات التي تنشئها يتم حفظها تلقائيًا في مكتبة الملخصات الخاصة بك، مما يتيح لك الوصول إليها بسهولة في أي وقت ومن أي مكان للمراجعة السريعة قبل المحاضرات أو الاختبارات."
                         sketch={
                            <Sketch>
                                <div className="text-sm font-semibold text-gray-500 mb-2">شكل توضيحي:</div>
                                <div className="p-2 border rounded-md text-right bg-white">
                                    <p className="font-bold">ملخص الفصل الأول:</p>
                                    <p className="text-sm">- النقطة الرئيسية الأولى...</p>
                                    <p className="text-sm">- النقطة الرئيسية الثانية...</p>
                                </div>
                            </Sketch>
                        }
                    />
                     <FeatureCard 
                        icon={RomanTempleIcon}
                        title="إدارة المكتبة"
                        description="مكتبتك الرقمية الذكية. كل كتاب تقوم بتحميله والعمل عليه يتم حفظه تلقائيًا في مكان واحد منظم. لا داعي للقلق بشأن فقدان عملك أو البحث عن الملفات. يقوم الذكاء الاصطناعي تلقائيًا بتصنيف كتبك إلى فئات وموضوعات رئيسية وفرعية، مما يجعل تصفح مجموعتك والوصول إلى كتاب معين أمرًا سهلاً للغاية. يمكنك عرض جميع كتبك المحفوظة، وحذف ما لم تعد بحاجة إليه، والحفاظ على مساحة عمل نظيفة ومنظمة. مكتبتك هي مركز التحكم في جميع موادك الدراسية، وهي مصممة لتنمو معك كلما توسعت معرفتك."
                        sketch={
                             <Sketch>
                                 <div className="text-sm font-semibold text-gray-500 mb-2">شكل توضيحي:</div>
                                <div className="space-y-2">
                                    <div className="p-2 border rounded-md text-right bg-white font-bold">التاريخ</div>
                                    <div className="p-2 border rounded-md text-right bg-white pr-4"> - كتاب تاريخ مصر القديمة</div>
                                </div>
                            </Sketch>
                        }
                    />
                     <FeatureCard 
                        icon={RomanTempleIcon}
                        title="إدارة المهام"
                        description="ابق منظمًا وعلى رأس أولوياتك الدراسية. تم تصميم مدير المهام هذا ليحاكي أفضل تطبيقات الإنتاجية، مما يمنحك أداة قوية لتنظيم جميع التزاماتك. يمكنك إضافة مهام جديدة بسهولة، سواء كانت قراءة فصل، حل واجب، أو التحضير لامتحان. حدد أولويتها (عالية، متوسطة، منخفضة) وحدد فئتها لتركيز طاقتك على ما هو أكثر أهمية، وقم بتعيين تواريخ استحقاق لضمان عدم تفويت أي موعد نهائي. تصفح مهامك بسهولة عن طريق تصفيتها وتجميعها بذكاء. إنها الأداة المثالية لتحويل الفوضى إلى خطة عمل واضحة."
                        sketch={
                             <Sketch>
                                 <div className="text-sm font-semibold text-gray-500 mb-2">شكل توضيحي:</div>
                                <div className="flex items-center gap-2 p-2 border-r-4 border-red-500 rounded bg-white">
                                    <input type="checkbox" className="w-4 h-4" />
                                    <span>مراجعة الفصل الثالث (أولوية عالية)</span>
                                </div>
                            </Sketch>
                        }
                    />
                    <FeatureCard 
                        icon={RomanTempleIcon}
                        title="آلة حاسبة علمية"
                        description="أداة قوية لإجراء جميع حساباتك الرياضية المعقدة دون مغادرة التطبيق. تم تصميم هذه الآلة الحاسبة لتحاكي الآلات الحاسبة العلمية المتقدمة، وهي مجهزة بالكامل للتعامل مع العمليات الحسابية الأساسية، الدوال المثلثية (sin, cos, tan)، اللوغاريتمات، الأسس، الجذور، والمزيد. تتميز بتصميم احترافي وواجهة سهلة الاستخدام، مما يجعلها الرفيق المثالي عند دراسة مواد الرياضيات، الفيزياء، أو الهندسة. سواء كنت تحتاج إلى حل معادلة سريعة أو إجراء عملية حسابية متعددة الخطوات، فإن هذه الآلة الحاسبة توفر لك الدقة والقوة التي تحتاجها."
                        sketch={
                             <Sketch>
                                <div className="text-sm font-semibold text-gray-500 mb-2">شكل توضيHI:</div>
                                <div className="font-mono p-3 border rounded-md bg-gray-800 text-white text-right">
                                    <div>sin(45) + log(100)</div>
                                    <div className="text-2xl">2.7071</div>
                                </div>
                            </Sketch>
                        }
                    />
                     <FeatureCard 
                        icon={RomanTempleIcon}
                        title="مواقيت الصلاة"
                        description="حافظ على التزاماتك الروحية بسهولة. توفر لك هذه الميزة مواقيت الصلاة الدقيقة بناءً على موقعك الجغرافي الحالي، مما يضمن أنك لن تفوت أي صلاة. يتم عرض جدول زمني كامل لليوم، بما في ذلك الفجر، الشروق، الظهر، العصر، المغرب، والعشاء. لتعزيز تجربتك، يمكنك تفعيل ميزة التنبيه الصوتي، حيث سيقوم التطبيق بتشغيل الأذان تلقائيًا عند حلول وقت كل صلاة. هذه الأداة مصممة لمساعدتك على الموازنة بين دراستك وعبادتك، مما يجعل الانضباط الروحي جزءًا لا يتجزأ من روتينك اليومي."
                        sketch={
                             <Sketch>
                                 <div className="text-sm font-semibold text-gray-500 mb-2">شكل توضيحي:</div>
                                <div className="flex justify-between p-2 border rounded-md bg-white">
                                    <span>المغرب</span>
                                    <span>07:00 م</span>
                                </div>
                                <div className="flex justify-between items-center mt-2">
                                    <span>تفعيل الأذان</span>
                                    <div className="w-10 h-5 bg-green-500 rounded-full p-1 flex justify-end"><div className="w-3 h-3 bg-white rounded-full"></div></div>
                                </div>
                            </Sketch>
                        }
                    />
                    <FeatureCard 
                        icon={RomanTempleIcon}
                        title="طلب النسخة الكاملة"
                        description="حوّل أداتك الدراسية إلى مملكة معرفية خاصة بك. النسخة الكاملة لا تحررّك فقط من قيود مفاتيح API، بل تفتح لك بوابات تجربة تعليمية لا مثيل لها: وصول فوري، أداء متفوق، ودعم مباشر يضمن استمرارية رحلتك دون أي عوائق تقنية. هذا ليس مجرد شراء، بل هو استثمار استراتيجي في مستقبلك، حيث تحصل على شريك ذكي يتطور معك، مع تحديثات حصرية وميزات قادمة تصمم لتلبية طموحاتك الأعلى. أنت لا تطلب مجرد تطبيق، بل تطلب مفتاح مملكتك التعليمية الخاصة، حيث كل شيء مصمم لخدمة هدف واحد: تميزك المطلق. بضغطة زر، تبدأ قصة نجاح جديدة."
                        sketch={
                            <Sketch>
                                <div className="flex flex-col items-center justify-center gap-4">
                                    <button
                                        onClick={onRequestPurchase}
                                        className="px-8 py-3 text-lg font-bold text-white rounded-lg shadow-lg bg-dark-gold-gradient animate-shimmer flex items-center justify-center transition-transform transform hover:scale-105"
                                        style={{ backgroundSize: '200% 200%' }}
                                    >
                                        تقديم طلب الشراء الآن
                                    </button>
                                </div>
                            </Sketch>
                        }
                    />
                </div>

            </div>
        </div>
    );
};

export default UserGuide;