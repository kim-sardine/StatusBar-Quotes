import * as constants from '../constants';
import Quotes from '../models/quotes';

const data: Quotes[] = [
    {
        language: constants.LANG_ENGLISH,
        sentences: [
            "A common fallacy is to assume authors of incomprehensible code will be able to express themselves clearly in comments. - Kevlin Henney - programmers-proverbs",
            "A computer is like a violin. You can imagine a novice trying ﬁrst a phonograph and then a violin. The latter, he says, sounds terrible. That is the argument we have heard from our humanists and most of our computer scientists. Computer programs are good, they say, for particular purposes, but they aren’t ﬂexible. Neither is a violin, or a typewriter, until you learn how to use it. - Marvin Minsky",
            "A language that doesn't affect the way you think about programming is not worth knowing. - Alan J. Perlis",
            "A poor programmer blames the language.",
            "Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live - John Woods",
            "An early BETA launch will teach you more than a delayed promise. - programmers-proverbs",
            "Any fool can write code that a computer can understand. Good programmers write code that humans can understand. - Martin Fowler",
            "Any sufficiently advanced bug is indistinguishable from a feature - R. Kulawiec",
            "Bad programmers worry about the code. Good programmers worry about data structures and their relationships. - Linus Torvalds",
            "Big Brother fills us all with the same crap. My guess is he was clever the same way everybody thinks they're clever. I tell her to type in 'password' - Chuck Palahniuk, Lullaby",
            "Debugging becomes significantly easier if you first admit that you are the problem.",
            "Don't commit on master when drunk. - programmers-proverbs",
            "Dynamic typing: The belief that you can’t explain to a computer why your code works, but you can keep track of it all in your head. - chris martin",
            "How you look at it is pretty much how you'll see it - Rasheed Ogunlaru",
            "I think that it’s extraordinarily important that we in computer science keep fun in computing. When it started out it was an awful lot of fun. Of course the paying customers got shafted every now and then and after a while we began to take their complaints seriously. We began to feel as if we really were responsible for the successful error-free perfect use of these machines. I don’t think we are. I think we’re responsible for stretching them setting them off in new directions and keeping fun in the house. I hope the ﬁeld of computer science never loses its sense of fun. Above all I hope we don’t become missionaries. Don’t feel as if you’re Bible sales-men. The world has too many of those already. What you know about computing other people will learn. Don’t feel as if the key to successful computing is only in your hands. What’s in your hands I think and hope is intelligence: the ability to see the machine as more than when you were ﬁrst led up to it that you can make it more. - Alan J. Perlis",
            "If you put a million monkeys on a million keyboards, one of them will eventually write a Java program. The rest of them will write Perl programs.",
            "I'm not a great programmer; I'm just a good programmer with great habits. - Kent Beck",
            "Much of the essence of building a program is in fact the debugging of the specification. - Fred Brooks",
            "Object-oriented programming offers a sustainable way to write spaghetti code. It lets you accrete programs as a series of patches. - Paul Graham, Hackers & Painters: Big Ideas from the Computer Age",
            "Perl – The only language that looks the same before and after RSA encryption. - Keith Bostic",
            "Programming today is a race between software engineers striving to build bigger and better idiot-proof programs, and the Universe trying to produce bigger and better idiots. So far, the Universe is winning. - Rick Cook",
            "Programs must be written for people to read, and only incidentally for machines to execute. - Harold Abelson",
            "Remember that code is really the language in which we ultimately express the requirements. We may create languages that are closer to the requirements. We may create tools that help us parse and assemble those requirements into formal structures. But we will never eliminate necessary precision—so there will always be code. - Robert C. Martin",
            "Sufficiently advanced abstractions are indistinguishable from obfuscation. - raganwald",
            "Sufficiently advanced trolling is indistinguishable from thought leadership. - Hall’s Law",
            "Talk is cheap. Show me the code. - Linus Torvalds",
            "That's the thing about people who think they hate computers. What they really hate is lousy programmers. - Larry Niven",
            "The act of describing a program in unambiguous detail and the act of programming are one and the same. - Kevlin Henney",
            "The best code is no code at all. - programmers-proverbs",
            "The best programs are written so that computing machines can perform them quickly and so that human beings can understand them clearly. A programmer is ideally an essayist who works with traditional aesthetic and literary forms as well as mathematical concepts, to communicate the way that an algorithm works and to convince a reader that the results will be correct. - Donald E. Knuth, Selected Papers on Computer Science",
            "The computer programmer is a creator of universes for which he alone is the lawgiver. No playwright, no stage director, no emperor, however powerful, has ever exercised such absolute authority to arrange a stage or field of battle and to command such unswervingly dutiful actors or troops. - Joseph Weizenbaum",
            "The more technology you learn, the more you realize how little you know.",
            "The most disastrous thing that you can ever learn is your first programming language. - Alan Kay",
            "The most important property of a program is whether it accomplishes the intention of its user. - C.A.R. Hoare",
            "Truth can only be found in one place: the code. - Robert C. Martin, Clean Code: A Handbook of Agile Software Craftsmanship",
            "Unix will give you enough rope to shoot yourself in the foot. If you didn’t think rope would do that, you should have read the man page. - mhoye",
            "Walking on water and developing software from a specification are easy if both are frozen. - Edward V. Berard",
            "when you don't create things, you become defined by your tastes rather than ability. your tastes only narrow & exclude people. so create. - Why The Lucky Stiff",
            "Your code might be perfect but you aren't",
        ],
    },
    {
        language: constants.LANG_KOREAN,
        sentences: [
            "가장 매력적인 PR 은 빨간색으로 도배되어 있다.",
            "건강한 몸에서 건강한 코드가!",
            "게으름이 개발자의 가장 좋은 친구이다. 한 번에 자동화할 수 있는 것을 두 번 하지 마라.",
            "당신 대부분은 프로그래머의 미덕과 친숙하다. 미덕은 세 가지인데 당연히 게으름, 성급함, 오만이다.",
            "당신은 소프트웨어 품질을 추구할 수도 있고 포인터 연산을 할 수도 있다. 그러나 두 개를 동시에 할 수는 없다. - Bertrand Meyer",
            "당신의 컴퓨터에서 돌아가는 건 중요하지 않다. 당신의 컴퓨터로 서비스하는 게 아니기 때문이다. - Vidiu Platon",
            "당신이 6개월 이상 한 번도 보지 않은 코드를 다시 봐야 한다면 차라리 다른 사람이 새로 시작하는게 훨씬 더 나을 수 있다. - Eagleson's Law",
            "더 이상 배우려고 하지 않고 쉬운 길을 택한다면 영원히 기존의 방법론에서 벗어나지 못하게 될 것이다.",
            "동작하지 않는 훌륭한 설계의 코드보다는 그래도 작동하는 미흡한 설계의 코드가 낫다.",
            "어떤 사람들이 무료 소프트웨어를 욕하는 이유는 자신들의 제품이 그것보다 못하기 때문이다. - David Emery",
            "새로운 기술이 번져가기 시작하면, 최소한 그 배경과 그 기술의 작동 원리를 이해할 필요는 있다. 세부적인 사항은 그 기술이 요구사항을 해결하는 데 도움이 될 때 파악해도 늦지 않다. 오래된 도구로는 새로운 문제를 해결할 수 없을 수 있다. 계속해서 새로운 언어를 익혀나가야 한다.",
            "세상에는 딱 두 가지 프로그래밍 언어가 있다. 사람들이 욕하는 언어와 아무도 사용하지 않는 언어. - Bjarne Stroustrup",
            "세상에 불필요한 학습은 없다. 우리는 더 불필요한 것을 많이 하고 산다.",
            "소수에 속하는 것이 변화의 시작이다.",
            "소프트웨어 설계를 구성하는 데에는 두 가지 방법이 있다. 첫 번째 방법은 아주 단순하게 만들어서 결함이 없게 만드는 것이다. 또 다른 방법은 명백한 결함이 보이지 않을 정도로 아주 복잡하게 만드는 것이다.",
            "에러 없는 프로그램을 만드는 데는 두 가지 방법이 있다. 그런데 세번째 것만 작동한다. -  Alan J. Perlis",
            "오늘 날 소프트웨어 대부분은 이집트 피라미드와 매우 비슷한데, 둘 다 수 많은 블럭을 차곡차곡 쌓았고, 구조적 무결성은 없고 그저 마구잡이로 노예 수천을 동원해 완성했다. - Alan Kay",
            "오늘 날 프로그래밍은 바보도 아무런 문제없이 쓸 수 있는 거대한 프로그램을 만드려고 애쓰는 개발자와 더 거대하고 더 나은 바보를 만드려는 우주의 경쟁이다. 지금까지는 우주가 이기고 있다. - Rick Cook",
            "올바로 작동하지 않는다고 걱정하지 마라. 만일 모든 게 잘 된다면 굳이 당신이 돈을 받으며 일 할 이유가 없다. - Mosher's Law of Software Engineering",
            "완벽함이란 더 이상 추가할 것이 없을 때 이루어지는 것이 아니라 더 이상 버릴 것이 없을 때 이루어진다. - 에릭 레이몬드",
            "일을 잘 할수록 남들은 난이도가 쉽다고 생각할 것이다.",
            "자신이 사용하고 싶은 것을 만들어라. - 스티브 워즈니악",
            "좋은 디자인은 그 때문에 소모되는 비용보다 빠르게 가치가 쌓인다. - Thomas C. Gale",
            "좋은 소프트웨어란 복잡한 기능을 간단하게 보이도록 만드는 것이다. - Grady Booch",
            "좋은 프로그래머 대부분은 돈이나 대중에게 받을 찬사를 기대하고 프로그래밍을 하는 것이 아니라 그냥 프로그래밍이 재미있어서 한다. - Linus Torvalds",
            "처음부터 자신이 문제라는 사실을 인정하면 디버깅이 훨씬 쉬워진다.",
            "최고의 프로그래머는 그냥 좋은 프로그래머보다 조금 더 나은 사람들이 아니다... 어떤 기준으로 측정해도 10배 이상 더 나은 사람들이다. - Randall E. Stross",
            "컴퓨터 언어를 설계하는 것은 공원을 산책하는 것과 같다. '쥬라기 공원!!!' - Larry Wall",
            "코드 수를 기준으로 프로그램의 진도를 측정하는 것은 비행기 제작 진도를 무게로 측정하는 것과 같다. - Bill Gates",
            "디버깅할 때는 개발을 할 때 보다 두 배는 똑똑해야 하므로 동료에게 검토를 부탁하라. 왜냐하면 자신의 코드를 디버깅할 만큼 똑똑한 사림은 없기 때문이다.",
            "하드웨어 : 사람이 발로 걷어찰 수 있는 컴퓨터의 부분 - Jeff pesis",
            "항상 이런 생각으로 개발에 임하라. '내 소스를 유지보수하게 되는 개발자가 내가 어디 살고 있는지 알고 있는 과격한 사이코패스일 것이다.' - Martin Golding",
            "형편없는 프로그래머가 언어를 탓한다.",
            "훌륭한 코드는 훌륭한 문서보다 낫다. - Steve McConnell",
        ],
    }
];

export default data;