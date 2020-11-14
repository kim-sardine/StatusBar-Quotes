import * as constants from '../constants';
import Quotes from '../models/quotes';

const data: Quotes[] = [
    {
        language: constants.LANG_ENGLISH,
        sentences: [
            "A lot of this is sheer persistence. It’s sheer persistence at one company or it’s sheer persistence at whatever you’re doing in the future. - Marc Andreessen",
            "A pessimist sees the difficulty in every opportunity; an optimist sees the opportunity in every difficulty. - Winston Churchill",
            "A satisfied customer is the best business strategy of all. - Michael LeBoeuf",
            "Always deliver more than expected. - Larry Page",
            "Any time is a good time to start a company. - Ron Conway",
            "Chase the vision, not the money, the money will end up following you. – Tony Hsieh",
            "Don’t be afraid to assert yourself, have confidence in your abilities, and don’t let the bastards get you down. - Michael Bloomberg",
            "Don’t be cocky. Don’t be flashy. There’s always someone better than you. - Tony Hsieh",
            "Even if you don’t have the perfect idea to begin with, you can likely adapt. - Victoria Ransom",
            "Everyone wants to be successful. But I want to be looked back on as being very innovative, very ethical, and ultimately making a big difference in the world. - Sergey Brin",
            "Fail often so you can succeed sooner. – Tom Kelley",
            "Forget about your competitors, just focus on your customers. - Jack Ma",
            "Get big quietly, So you don't tip off potential competitors.",
            "Ideas are easy. Implementation is hard. - Guy Kawasaki",
            "If everything seems under control, you’re just not going fast enough. - Mario Andretti",
            "If you are not embarrassed by the first version of your product, you’ve launched too late. – Reid Hoffman",
            "If you just work on stuff that you like and you’re passionate about, you don’t have to have a master plan with how things will play out. - Mark Zuckerberg",
            "If you’re not a risk taker, you should get the hell out of business. - Ray Kroc",
            "It’s almost always harder to raise capital than you thought it would be, and it always takes longer. So plan for that. - Richard Harroch",
            "Make your team feel respected, empowered and genuinely excited about the company’s mission. - Tim Westergen",
            "Nothing works better than just improving your product. - Joel Spolsky",
            "Stay self-funded as long as possible. - Garrett Camp",
            "The cost of hiring someone bad is so much greater than missing out on someone good. - Joe Kraus",
            "The critical ingredient is getting off your butt and doing something. It’s as simple as that. A lot of people have ideas, but there are few who decide to do something about them now. Not tomorrow. Not next week. But today. The true entrepreneur is a doer, not a dreamer. - Nolan Bushnell",
            "The fastest way to change yourself is to hang out with people who are already the way you want to be. – Reid Hoffman",
            "The secret of getting ahead is getting started. The secret of getting started is breaking your complex overwhelming tasks into smaller manageable tasks, and then starting on the first one. - Mark Twain",
            "The way to get started is to quit talking and start doing. - Walt Disney",
            "User experience is everything. It always has been, but it’s undervalued and underinvested in. If you don’t know user-centered design, study it. Hire people who know it. Obsess over it. Live and breathe it. Get your whole company on board. - Evan Williams",
            "Waiting for perfect is never as smart as making progress. - Seth Godin",
            "What do you need to start a business? Three simple things: know your product better than anyone, know your customer, and have a burning desire to succeed. - Dave Thomas",
            "When  you innovate, you've got to be prepared for people telling you that you are nuts - Larry Ellison",
            "When you find an idea that you just can’t stop thinking about, that’s probably a good one to pursue. - Josh James",
            "When you first start off trying to solve a problem, the first solutions you come up with are very complex, and most people stop there. But if you keep going, and live with the problem and peel more layers of the onion off, you can oftentimes arrive at some very elegant and simple solutions. Most people just don’t put in the time or energy to get there. We believe that customers are smart, and want objects which are well thought through. - Steve jobs",
            "Wonder what your customer really wants? Ask. Don’t tell. - Lisa Stone",
            "You can’t expect your employees to exceed the expectations of your customers if you don’t exceed your employees’ expectations of management. - Howard Schultz",
            "You can’t just ask customers what they want and then try to give that to them. By the time you get it built, they’ll want something new. - Steve jobs",
            "You shouldn’t focus on why you can’t do something, which is what most people do. You should focus on why perhaps you can, and be one of the exceptions. - Steve Case",
            "Your most unhappy customers are your greatest source of learning. - Bill Gates",
            "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do. - Steve Jobs",
        ]
    },
    {
        language: constants.LANG_KOREAN,
        sentences: [
            "18년동안 아마존을 성공으로 이끈 3가지 큰 전략이 있다.그것은 고객을 우선 생각하고, 발명하고, 인내하는 것이다. - 제프 베조스",
            "가끔은 혁신을 추구하다 실수할 때도 있다. 하지만 빨리 인정하고 다른 혁신을 개선해 나가는 것이 최선이다. - 스티브 잡스",
            "가장 불만이 많은 고객에게 고객에게 가장 많은 것을 배울 수 있다. - 빌 게이츠",
            "가장 중요한 것은 기회를 잡는 것을 두려워 않는 것이다. 기억하라. 가장 큰 실패는 시도하지 않는 것이다. - 데비 필즈",
            "경쟁 우위가 없다면, 경쟁하지 마라. - 잭 웰치",
            "당신의 경쟁자들에 대해서는 잊어라. 당신의 고객게에만 집중하라. - 마윈",
            "당신의 제품을 개선시키는 것 보다 효과적인 것은 없다. - Joel Spolsky",
            "당신이 내놓은 첫 번째 상품에 부끄럽지 않다면, 당신은 너무 늦게 런칭한 것이다. - Reid Hoffman",
            "당신이 할 수 있다고 믿든, 할수 없다고 믿든, 믿는 대로 될 것이다. - 헨리 포드",
            "더 빨리 성공하기 위해 자주 실패하라. - Tom Kelley",
            "만족한 고객은 그 어떤 것보다도 최고의 사업 전략이다. - Michael LeBoeuf",
            "몇몇 사람들을 정말로 행복하게 만드는 것이 많은 사람들을 조금 행복하게 만드는 것보다 낫다. - 폴 그레이엄",
            "모든 기능은 유지비용이 든다. 소수의 기능만을 가지는 것은 우리가 정말로 신경쓰는 것에 집중하도록 하고, 또 그것을 뛰어나게 만든다. - 데이비드 카프",
            "비결은 '더하는 것' 이 아니라 '빼는 것' 이다. - Mark Zuckerberg",
            "비전이 있어야 전략이 생긴다. - 제인스 쿠퍼",
            "스타트업을 경영하는 것은 얼굴에 지속적인 펀치를 맞는 것과 같다. 하지만 대기업에서 일하는 것은 물고문을 당하는 것과 같다. - 폴 그레이엄",
            "승리하면 조금 배울 수 있고, 패배하면 모든 것을 배울 수 있다. - 크리스티 메튜슨",
            "실수를 하고 있지 않다면, 자신이 결정을 내리고 있지 않다는 것이다. - 캐더린 쿡",
            "아무런 위험을 감수하지 않는다면, 더 큰 위험을 감수게 될 것이다. - 에리카 종",
            "아이디어는 쉽다. 실행이 어렵다. - Guy Kawasaki",
            "아이디어의 좋고 나쁨은 어떻게 실행하느냐에 따라 결정된다. - 카를로스 곤",
            "안 좋은 직원을 고용하는 것은 뛰어난 인재를 놓친 것보다 대가가 크다. - 조 크라우스",
            "자신을 변화시키는 가장 빠른 방법은 자신이 되고 싶은 사람들과 시간을 보내는 것이다. – Reid Hoffman",
            "절대적인 목표는 만족하는 고객으로부터 돈을 받는 것이다. - 존 이간",
            "정말로 무멋인가에 빠지게 된다면 야근과 주말근무까지도 일처럼 느껴지지 않을 것이다. - Kevin Rose",
            "조용하게 성장하라. 잠재적 경쟁자를 최소화하기 위해. - Chris Dixon",
            "중요한 질문은 '당신이 얼마나 바쁜가?' 가 아니다. '당신이 무엇에 바쁜가' 가 핵심 질문이다. - 오프라 윈프리",
            "타이밍, 인내 그리고 10년간의 노력이 합쳐져야 마침내 당신은 하룻밤 사이에 성공한 것 처럼 보일 것이다. - Biz Stone",
            "포기해야겠다는 생각이 들 때야말로 성공에 가까워진 때이다. - 밥 파슨스",
            "한 번 실패와 영원한 실패를 혼동하지 마라. - 피츠제럴드",
        ]
    }
];

export default data;