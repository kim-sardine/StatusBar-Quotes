import * as constants from '../constants';
import Quotes from '../models/quotes';

const data: Quotes[] = [
    {
        language: constants.LANG_ENGLISH,
        sentences: [
            "A goal is not always meant to be reached; it often serves simply as something to aim at. -  Bruce Lee",
            "A man can be as great as he wants to be. If you believe in yourself and have the courage, the determination, the dedication, the competitive drive and if you are willing to sacrifice the little things in life and pay the price for the things that are worthwhile, it can be done. - Vince Lombardi",
            "A real entrepreneur is somebody who has no safety net underneath them. - Henry Kravis",
            "A successful man is one who can lay a firm foundation with the bricks others have thrown at him. - David Brinkley",
            "All our dreams can come true if we have the courage to pursue them. - Walt Disney",
            "All progress takes place outside the comfort zone. - Michael John Bobak",
            "As we look ahead into the next century, leaders will be those who empower others. - Bill Gates",
            "Be miserable. Or motivate yourself. Whatever has to be done, it's always your choice. - Wayne Dyer",
            "Blessed are those who can give without remembering and take without forgetting. - Anonymous",
            "Courage is resistance to fear, mastery of fear- not absence of fear. - Mark Twain",
            "Develop success from failures. Discouragement and failure are two of the surest stepping stones to success. - Dale Carnegie",
            "Do one thing every day that scares you. - Anonymous",
            "Don't let the fear of losing be greater than the excitement of winning. - Robert Kiyosaki",
            "Don't let what you cannot do interfere with what you can do. - John R. Wooden",
            "Don't raise your voice, improve your argument. - Anonymous",
            "Failure is the condiment that gives success its flavor. - Truman Capote",
            "Good things come to people who wait, but better things come to those who go out and get them. - Anonymous",
            "Great minds discuss ideas; average minds discuss events; small minds discuss people. - Eleanor Roosevelt",
            "Happiness is a butterfly, which when pursued, is always beyond your grasp, but which, if you will sit down quietly, may alight upon you. - Nathaniel Hawthorne",
            "I believe that the only courage anybody ever needs is the courage to follow your own dreams. - Oprah Winfrey",
            "I don't want to get to the end of my life and find that I lived just the length of it. I want to have lived the width of it as well. - Diane Ackerman",
            "I find that the harder I work, the more luck I seem to have. - Thomas Jefferson",
            "I find that when you have a real interest in life and a curious life, that sleep is not the most important thing. - Martha Stewart",
            "I have not failed. I've just found 10,000 ways that won't work. - Thomas A. Edison",
            "If you are not willing to risk the usual you will have to settle for the ordinary. - Jim Rohn",
            "If you can't explain it simply, you don't understand it well enough. - Albert Einstein",
            "If you do what you always did, you will get what you always got. - Anonymous",
            "If you don't design your own life plan, chances are you'll fall into someone else's plan. And guess what they have planned for you? Not much. - Jim Rohn",
            "If you don't value your time, neither will others. Stop giving away your time and talents- start charging for it. - Kim Garst",
            "If you genuinely want something, don't wait for it- teach yourself to be impatient. - Gurbaksh Chahal",
            "If you want to achieve excellence, you can get there today. As of this second, quit doing less-than-excellent work. - Thomas J. Watson",
            "If you want to achieve greatness stop asking for permission. - Anonymous",
            "If you want to make a permanent change, stop focusing on the size of your problems and start focusing on the size of you! - T. Harv Eker",
            "If you're going through hell keep going. - Winston Churchill",
            "In my experience, there is only one motivation, and that is desire. No reasons or principle contain it or stand against it. - Jane Smiley",
            "Innovation distinguishes between a leader and a follower. - Steve Jobs",
            "It is better to fail in originality than to succeed in imitation. - Herman Melville",
            "It's not what you look at that matters, it's what you see. - Anonymous",
            "Just when the caterpillar thought the world was ending, he turned into a butterfly. - Proverb",
            "Knowledge is being aware of what you can do. Wisdom is knowing when not to do it. - Anonymous",
            "Life is not about finding yourself. Life is about creating yourself. - Lolly Daskal",
            "Little minds are tamed and subdued by misfortune; but great minds rise above it. - Washington Irving",
            "Most of the important things in the world have been accomplished by people who have kept on trying when there seemed to be no help at all. - Dale Carnegie",
            "Motivation is what gets you started. Habit is what keeps you going. - Jim Ryun",
            "No masterpiece was ever created by a lazy artist. - Anonymous",
            "No one can make you feel inferior without your consent. - Eleanor Roosevelt",
            "Nothing in the world is more common than unsuccessful people with talent. - Anonymous",
            "Only put off until tomorrow what you are willing to die having left undone. - Pablo Picasso",
            "Opportunities don't happen, you create them. - Chris Grosser",
            "Our greatest fear should not be of failure but of succeeding at things in life that don't really matter. - Francis Chan",
            "People often say that motivation doesn't last. Well, neither does bathing- that's why we recommend it daily. - Zig Ziglar",
            "People rarely succeed unless they have fun in what they are doing. - Dale Carnegie",
            "People who succeed have momentum. The more they succeed, the more they want to succeed, and the more they find a way to succeed. Similarly, when someone is failing, the tendency is to get on a downward spiral that can even become a self-fulfilling prophecy. - Tony Robbins",
            "Real difficulties can be overcome; it is only the imaginary ones that are unconquerable. - Theodore N. Vail",
            "Success does not consist in never making mistakes but in never making the same one a second time. - George Bernard Shaw",
            "Success is ... knowing your purpose in life, growing to reach your maximum potential, and sowing seeds that benefit others. - John C. Maxwell",
            "Success is liking yourself, liking what you do, and liking how you do it. - Maya Angelou",
            "Success is the sum of small efforts, repeated day-in and day-out. - Robert Collier",
            "Success is walking from failure to failure with no loss of enthusiasm. - Winston Churchill",
            "Successful entrepreneurs are givers and not takers of positive energy. - Anonymous",
            "Take up one idea. Make that one idea your life- think of it, dream of it, live on that idea. Let the brain, muscles, nerves, every part of your body, be full of that idea, and just leave every other idea alone. This is the way to success. - Swami Vivekananda",
            "The distance between insanity and genius is measured only by success. - Bruce Feirstein",
            "The first step toward success is taken when you refuse to be a captive of the environment in which you first find yourself. - Mark Caine",
            "The function of leadership is to produce more leaders, not more followers. - Ralph Nader",
            "The meaning of life is to find your gift. The purpose of life is to give it away. - Anonymous",
            "The number one reason people fail in life is because they listen to their friends, family, and neighbors. - Napoleon Hill",
            "The ones who are crazy enough to think they can change the world, are the ones who do. - Anonymous",
            "The only place where success comes before work is in the dictionary. - Vidal Sassoon",
            "The reason most people never reach their goals is that they don't define them, or ever seriously consider them as believable or achievable. Winners can tell you where they are going, what they plan to do along the way, and who will be sharing the adventure with them. - Denis Waitley",
            "The road to success and the road to failure are almost exactly the same. - Colin R. Davis",
            "The starting point of all achievement is desire. - Napoleon Hill",
            "The successful warrior is the average man, with laser-like focus. - Bruce Lee",
            "The whole secret of a successful life is to find out what is one's destiny to do, and then do it. - Henry Ford",
            "There are two types of people who will tell you that you cannot make a difference in this world: those who are afraid to try and those who are afraid you will succeed. - Ray Goforth",
            "There is no chance, no destiny, no fate, that can hinder or control the firm resolve of a determined soul. - Ella Wheeler Wilcox",
            "There is no traffic jam along the extra mile. - Roger Staubach",
            "Things work out best for those who make the best of how things work out. - John Wooden",
            "Thinking should become your capital asset, no matter whatever ups and downs you come across in your life. - A.P.J. Abdul Kalam",
            "To accomplish great things, we must not only act, but also dream, not only plan, but also believe. - Anatole France",
            "To live a creative life, we must lose our fear of being wrong. - Anonymous",
            "Too many of us are not living our dreams because we are living our fears. - Les Brown",
            "Trust because you are willing to accept the risk, not because it's safe or certain. - Anonymous",
            "Try not to become a person of success, but rather try to become a person of value. - Albert Einstein",
            "Two roads diverged in a wood and I  took the one less traveled by, and that made all the difference. - Robert Frost",
            "We become what we think about most of the time, and that's the strangest secret. - Earl Nightingale",
            "What seems to us as bitter trials are often blessings in disguise. - Oscar Wilde",
            "What would you do if you weren't afraid. - Spencer Johnson",
            "What's the point of being alive if you don't at least try to do something remarkable. - Anonymous",
            "When I dare to be powerful, to use my strength in the service of my vision, then it becomes less and less important whether I am afraid. - Audre Lorde",
            "When you stop chasing the wrong things, you give the right things a chance to catch you. - Lolly Daskal",
            "Whenever you find yourself on the side of the majority, it is time to pause and reflect. - Mark Twain",
            "Whenever you see a successful person you only see the public glories, never the private sacrifices to reach them. - Vaibhav Shah",
            "You can do anything, but not everything. - Anonymous",
            "You can't connect the dots looking forward; you can only connect them looking backwards. So you have to trust that the dots will somehow connect in your future. You have to trust in something- your gut, destiny, life, karma, whatever. This approach has never let me down, and it has made all the difference in my life. - Steve Jobs",
            "You may have to fight a battle more than once to win it. - Margaret Thatcher",
            "You may only succeed if you desire succeeding; you may only fail if you do not mind failing. - Philippos",
            "You measure the size of the accomplishment by the obstacles you had to overcome to reach your goals. - Booker T. Washington",
            "You must expect great things of yourself before you can do them. - Michael Jordan",
            "Your problem isn't the problem. Your reaction is the problem. - Anonymous",
            "You've got to get up every morning with determination if you're going to go to bed with satisfaction. - George Lorimer",          ]
    },
    {
        language: constants.LANG_KOREAN,
        sentences: [
            "18년동안 아마존을 성공으로 이끈 3가지 큰 전략이 있다.그것은 고객을 우선 생각하고, 발명하고, 인내하는 것이다. - 제프 베조스",
            "가끔은 혁신을 추구하다 실수할 때도 있다. 하지만 빨리 인정하고 다른 혁신을 개선해 나가는 것이 최선이다. - 스티브 잡스",
            "가시에 찔리지 않고서는 장미를 모을 수 없다. - 핀페이",
            "간단함이 훌륭함의 열쇠다. - 이소룡",
            "강에서 물고기를 보고 탐내는 것보다 돌아가서 그물을 짜는 것이 옳다. - 예악지",
            "겨울이 오면 봄이 멀지 않으리. - 셸리",
            "고통을 거치지 않고 얻은 승리는 영광이 아니다. - 나폴레옹",
            "기와한장 아껴서 대들보 썩는다. - 한국속담",
            "길을 아는 것과 그 길을 걷는 것은 분명히 다르다. - 모피어스(매트릭스)",
            "나는 그저 나보다 머리가 좋은 사람들을 채용했을 뿐이다. - 록펠러",
            "남에게 받고 싶은 일을 남에게 하라",
            "낭비한 시간에 대한 후회는 더 큰 시간 낭비이다. - 메이슨 쿨리",
            "내 자신의 무식을 아는 것은 지식에로의 첫걸음이다. - 바이런",
            "내가 헛되이 보낸 오늘은 어제 죽어간 이들이 그토록 바라던 하루이다. 단 하루면 인간적인 모든 것을 멸망시킬 수도 다시 소생시킬 수도 있다. - 소포클레스",
            "다리를 움직이지 않고는 작은 도랑도 건널 수 없다. - 알랭",
            "당신이 배를 만들고 싶다면, 사람들에게 목재를 가져오게 하고 일을 지시하고 일감을 나눠주는 일을 하지 말라. 대신 그들에게 저 넓고 끝없는 바다에 대한 동경심을 키워줘라. - 생텍쥐페리",
            "당신이 할 수 있다고 믿든, 할수 없다고 믿든, 믿는 대로 될 것이다. - 헨리 포드",
            "들은 것은 잊어버리고, 본 것은 기억하고 직접 해본 것은 이해한다. - 공자",
            "말만 하고 행동하지 않는 사람은 잡초로 가득 찬 정원과 같다. - 하우얼",
            "말을 많이 한다는 것과 잘 한다는 것은 별개이다. - 소포클레스",
            "명성을 쌓는 것에는 20년이란 세월이 걸리며 명성을 무너뜨리는 것에는 5분도 걸리지 않는다. 그걸 명심한다면 당신의 행동이 달라질 것이다. - 워렌버핏",
            "모든 기능은 유지비용이 든다. 소수의 기능을 가지는 것은 우리가 정말로 신경쓰는 것에 집중하도록 하고 그것들이 뛰어나도록 만든다. - 데이비드 카프",
            "바람이 불지 않으면 노를 저어라. - 윈스턴 처칠",
            "비장의 무기는 아직 손안에 있다. 그것은 희망이다. - 나폴레옹",
            "산을 움직이려 하는 이는 작은 돌을 들어내는 일로 시작한다. - 공자",
            "성공을 위한 세가지 열쇠는 이것이다. 첫째는 끈기, 둘째는 끈기, 셋째도 끈기. - 이소룡",
            "성공의 커다란 비결은 결코 지치지 않는 인간으로 인생을 살아가는 것이다. - 알버트 슈바이처",
            "성공해서 만족하는 것은 아니다. 만족하고 있었기 때문에 성공한 것이다. - 알랭",
            "승리하면 조금 배울 수 있고, 패배하면 모든 것을 배울 수 있다. - 크리스티 메튜슨",
            "승자는 책임지는 태도로 살며, 패자는 약속을 남발한다. - 유태경전",
            "시도해보지 않고는 누구도 자신이 얼마만큼 해낼 수 있는지 알지 못한다. - 푸블릴리우스 시루스",
            "아는 것을 안다 하고 모르는 것을 모른다 하는 것이 말의 근본이다. - 순자",
            "아름다운 것들은 관심을 바라지 않는다. - 숀 오코넬(월터의 상상은 현실이 된다.)",
            "아이디어의 좋고 나쁨은 어떻게 실행하느냐에 따라 결정된다. - 카를로스 곤",
            "앞날을 결정짓고자 하면 옛것을 공부하라. - 공자",
            "역경은 사람을 부유하게 하지는 않으나 지혜롭게 한다. - 풀러",
            "우선 무엇이 되고자 하는가를 자신에게 말하라 그리고 해야 할일을 하라  - 에픽토테스",
            "인생을 다시 산다면 다음번에는 더 많은 실수를 저지르리라. - 나딘 스테어",
            "자신의 능력을 감추지 마라. 재능은 쓰라고 주어진 것이다. 그늘 속의 해시계가 무슨 소용이랴. - 벤자민 프랭클린",
            "적이 없는 자는 친구도 없다",
            "절대 포기하지 마라. 장벽에 부딪히거든 그것이 절실함을 나에게 물어보는 장치에 불과하다는 것을 잊지 마라. - 랜디 포시",
            "중요한 승부에서 패하고도 마음이 아무렇지 않다면 그것은 이미 프로가 아니다. 그것은 인품과 무관하며 승부사에게 패배의 아픔은 항상 생생한 날것이어야 한다. 늘 승자가 될 수는 없지만 패자의 역할에 길들여져서는 안된다. - 이창호",
            "지나치게 도덕적인 사람의 되지 마라. 인생을 즐길 수 없게 된다. 도덕 그 이상을 목표로 하라. 단순한 선함이 아니라 목적 있는 선함을 가져라. - 헨리 데이비드 소로우",
            "처음에는 우리가 습관을 만들지만 그 다음에는 습관이 우리를 만든다. - 존 드라이든",
            "한 번 실패와 영원한 실패를 혼동하지 마라. - 피츠제럴드",
            "항상 갈구하라. 바보짓을 두려워마라. - 스티브 잡스",
            "현재와 미래는 어떻게든 연결되어 있다 - 스티브 잡스",
            "휴식은 게으름도, 멈춤도 아니다. - 헨리 포드",
        ]
    }
];

export default data;