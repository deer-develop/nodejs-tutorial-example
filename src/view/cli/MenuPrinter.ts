import { ArticleResponseDto } from "../../article/application/port/incoming/ArticleResponseDto";
import { ArticlePrinter } from "../../article/view/cli/ArticlePrinter";
import { Constants } from "../../Constants";

export class MenuPrinter {
  public constructor(private articlePrinter: ArticlePrinter) {}

  public printHome = (): string =>
    `1) 목록 조회
2) 쓰기
x) 종료${this.printSelect()}`;

  public printArticleList = (articles: ArticleResponseDto[]): string =>
    this.articlePrinter.printForList(...articles) +
    Constants.LINE_BREAK +
    this.printGoBack() +
    this.printSelect();

  public printArticleDetail = (article: ArticleResponseDto): string =>
    this.articlePrinter.printEach(article) + this.printEnterKeyToGoBack();

  public printArticleSaved = (id: number): string =>
    Constants.LINE_BREAK +
    this.articlePrinter.printSaved(id) +
    this.printEnterKeyToGoBack();

  // 아래는 private도 가능할 것 같은데?
  public printGoBack = (): string => Constants.GO_BACK_COMMAND + ") 뒤로가기";
  public printSelect = (): string =>
    Constants.LINE_BREAK + Constants.LINE_BREAK + "선택: ";
  public printEnterKeyToGoBack = (): string =>
    Constants.LINE_BREAK +
    Constants.LINE_BREAK +
    "엔터 키를 누르면 이전 화면으로 되돌아갑니다.";
  public printWrongInput = (): string =>
    "입력이 올바르지 않습니다. 아래 선택지의 맨 앞 숫자를 입력해주세요." +
    Constants.LINE_BREAK +
    Constants.LINE_BREAK;
}
