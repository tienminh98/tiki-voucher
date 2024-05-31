import {Component, OnInit, OnDestroy, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {Router, RouterModule} from '@angular/router';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

import SharedModule from 'app/shared/shared.module';
import {AccountService} from 'app/core/auth/account.service';
import {Account} from 'app/core/auth/account.model';
import {NgOptimizedImage} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";
import {NzButtonComponent, NzButtonSize} from 'ng-zorro-antd/button';
import {StateStorageService} from '../core/auth/state-storage.service';
import {NzIconDirective} from "ng-zorro-antd/icon";
import {NzInputDirective, NzInputGroupComponent} from "ng-zorro-antd/input";


@Component({
  standalone: true,
  selector: 'jhi-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
    imports: [SharedModule, RouterModule, NgOptimizedImage, ReactiveFormsModule, NzButtonComponent, NzIconDirective, NzInputDirective, NzInputGroupComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export default class HomeComponent implements OnInit, OnDestroy {
  account: any = null;
  size: NzButtonSize = 'large';

  private readonly destroy$ = new Subject<void>();

  commodityList: any[] = [];
  memberList: any[] = [];
  memberImageList: any[] = [];
  annList: any[] = [];
  levelList: any = [];

  jobList: any = [];

  marqueeList = [
    'Doanh thu của cửa hàng quần áo Thu Đông Shop Hà Nội đã vượt mức doanh số bán ra, và ra mắt sự kiện đặc biệt 30%.',
    'Siêu thị Bách hóa XANH 49 Huỳnh Tịnh Của ở quận mới của Thành phố Hồ Chí Minh đã tham gia sự kiện kỷ niệm và tiết kiệm 3.000.000.000 để nhận 300.000 phiếu giảm giá.',
    'Cửa hàng bách hóa Hạ Long đã được nâng cấp thành thành viên VIP.',
    'Cửa hàng bách hóa Đà Nẵng đã được nâng cấp thành thành viên VIP.',
    'Công Ty CPCN Và TM ĐÔNG BẮC Á đã tham gia sự kiện kỷ niệm và tiết kiệm 3.000.000.000 để có 3.000.000. phiếu mua hàng.',
    'Cửa hàng bách hóa 1989 Hà Đông, thành phố Hà Nội, đã được nâng cấp thành thành viên cao cấp.',
    'Siêu thị Bách hóa XANH 216 Kênh 19 tháng 5 tại Thành phố Hồ Chí Minh, với doanh thu 1.673.000 triệu, có thể tham gia hoạt động lấy phiếu mua hàng.',
    'Hanoi Lyra shop với doanh thu 9,2 triệu có thể tham gia hoạt động nhận phiếu mua hàng.',
    'Tập đoàn Xăng dầu Việt Nam. được nâng cấp lên thành viên VIP.',
    'Công ty cổ phần Tập đoàn Hòa Phát, đã tham gia sự kiện kỷ niệm và tiết kiệm 3.000.000.000 để nhận được 3.000.000 phiếu giảm giá.',
    'Tây Ninh rất mong đợi cửa hàng bách hóa mùa hè, doanh thu 5,37 triệu, có thể tham gia hoạt động lấy phiếu.',
    'Trung tâm Kinh doanh Phú Tài, nâng cấp lên thành viên cao cấp.',
    'Công ty TNHH Thương mại Đà Nẵng, với doanh thu 8,63 nghìn tỷ đồng, có thể tham gia hoạt động lấy phiếu mua hàng.',
    'Ngân hàng TMCP Đầu tư và Phát triển Việt Nam. Tham gia sự kiện kỷ niệm và tiết kiệm 300 triệu để nhận 300 triệu phiếu mua hàng.',
    'Công ty TNHH Thương mại Toàn Thắng Cần Thơ với doanh thu 10,61 tỷ được tham gia hoạt động lấy phiếu thu.',
    'Công ty TNHH Samsung Electronics Việt Nam Thái Nguyên, tham gia sự kiện kỷ niệm, và tiết kiệm 300 triệu để nhận 300 triệu coupon.',
    'Bách Hóa Thanh Xuân Mart Hà Nội đã được nâng cấp thành thành viên VIP.',
    'Bách Hóa 41 Phú Viên thành phố Hà Nội đã được nâng cấp thành thành viên VIP.',
    'Công ty TNHH Đầu Tư Tài Chính Thành phố Hồ Chí Minh, tham gia sự kiện kỷ niệm, đặt cọc 3.000.000.000 ₫ và nhận phiếu giảm giá 1.000.000.000 ₫.',
    'Thịnh Tươi Bách Hóa Tổng Hợp, thành phố Hà Nội, được nâng cấp thành thành viên cao cấp.',
    'Tập đoàn Công nghiệp - Viễn thông Quân đội được nâng cấp thành thành viên cao cấp.',
    'Cửa hàng quần áo Trang Đoàn tại Tiền Giang, được nâng cấp lên thành viên cao cấp.',
    'Cửa hàng Bách hóa Nguyên chất Thành phố Hồ Chí Minh, với doanh thu 6,52 triệu, có thể tham gia hoạt động lấy phiếu mua hàng.'
  ];

  public targetList = [
    {reqInvest: 300, commission: 0.5, order: 40},
    {reqInvest: 1000, commission: 0.6, order: 60},
    {reqInvest: 3000, commission: 0.7, order: 80},
    {reqInvest: 5000, commission: 0.8, order: 100},
    {reqInvest: 10000, commission: 0.9, order: 120},
    {reqInvest: 30000, commission: 1, order: 140},
    {reqInvest: 50000, commission: 1.2, order: 160},
    {reqInvest: 100000, commission: 1.4, order: 180},
    {reqInvest: 300000, commission: 1.6, order: 200},
    {reqInvest: 500000, commission: 2, order: 220}
  ]

  constructor(
    private accountService: AccountService,
    private router: Router,
    private stateStorageService: StateStorageService,
  ) {
    this.commodityList = this.fakeArray(12).map((_, index) => `content/imagess/g${index + 1}.jpg`);
    this.memberImageList = this.fakeArray(9).map((_, index) => `content/imagess/h${index + 1}.jpg`);
    this.memberList = this.fakeArray(10).map((_, index) => ({
      bgImg: `content/imagess/m${this.randomBetween1And4()}.jpg`,
      title: 'SAKS OFF 5TH',
      reqInvest: this.targetList[index].reqInvest,
      type: `VIP${index}`,
      val: this.targetList[index].commission,
      order: this.targetList[index].order,
    }));


    this.jobList = [
      {
        tag: {
          type: 0,
          text: "nổi bật"
        },
        image: 'content/images/job-1.jpg',
        title: 'Tuyển dụng gấp: 5 nam kỹ sư xây dựng tại cầu giấy',
        price: "15-20 triệu/tháng",
        time: "Hôm nay",
        address: "Quận Cầu Giấy"
      },
      {
        tag: {
          type: 0,
          text: "nổi bật"
        },
        image: 'content/images/job-2.jpg',
        title: 'Tuyển nhân viên tổ chức hành chính tại đống đa',
        price: "10-12 triệu/tháng",
        time: "Hôm nay",
        address: "Quận Đống Đa"
      },
      {
        tag: {
          type: 0,
          text: "nổi bật"
        },
        image: 'content/images/job-3.jpg',
        title: 'Tuyển đầu bếp chuyên nghiệp tại thanh xuân',
        price: "12-15 triệu/tháng",
        time: "Hôm qua",
        address: "Quận Thanh Xuân"
      },
      {
        tag: {
          type: 0,
          text: "nổi bật"
        },
        image: 'content/images/job-4.jpg',
        title: 'Tuyển lái xe tải kinh nghiệm tại hai bà trưng',
        price: "Thỏa thuận",
        time: "2 ngày trước",
        address: "Quận Hai Bà Trưng"
      },
      {
        tag: {
          type: 0,
          text: "nổi bật"
        },
        image: 'content/images/job-5.jpg',
        title: 'Tuyển nhân viên massage tại hoàn kiếm',
        price: "8-10 triệu/tháng",
        time: "Hôm nay",
        address: "Quận Hoàn Kiếm"
      },
      {
        tag: {
          type: 0,
          text: "nổi bật"
        },
        image: 'content/images/job-1.png',
        title: 'Tuyển dụng gấp: 7 nam công nhân sản xuất tại bắc từ liêm',
        price: "10-12 triệu/tháng",
        time: "Hôm qua",
        address: "Quận Bắc Từ Liêm"
      },
      {
        tag: {
          type: 0,
          text: "nổi bật"
        },
        image: 'content/images/job-2.jpg',
        title: 'Tuyển nhân viên tổ chức hành chính tại tây hồ',
        price: "6-8 triệu/tháng",
        time: "3 ngày trước",
        address: "Quận Tây Hồ"
      },
      {
        tag: {
          type: 0,
          text: "nổi bật"
        },
        image: 'content/images/job-3.jpg',
        title: 'Tuyển đầu bếp chuyên nghiệp tại long biên',
        price: "7-9 triệu/tháng",
        time: "Hôm nay",
        address: "Quận Long Biên"
      },
      {
        tag: {
          type: 0,
          text: "nổi bật"
        },
        image: '',
        title: 'Tuyển lái xe tải kinh nghiệm tại hoàng mai',
        price: "12-15 triệu/tháng",
        time: "Hôm qua",
        address: "Quận Hoàng Mai"
      },
      {
        tag: {
          type: 0,
          text: "nổi bật"
        },
        image: 'content/images/job-6.jpg',
        title: 'Tuyển nhân viên massage tại hà đông',
        price: "Thỏa thuận",
        time: "4 ngày trước",
        address: "Quận Hà Đông"
      }
    ];
    this.annList = [
      {
        cardNumber: '[****2512]',
        money: 180698,
      },
      {
        cardNumber: '[****2190]',
        money: 2193,
      },
      {
        cardNumber: '[****4121]',
        money: 15612,
      },
      {
        cardNumber: '[****7567]',
        money: 31334,
      },
      {
        cardNumber: '[****9299]',
        money: 1244,
      },
      {
        cardNumber: '[****0678]',
        money: 91249,
      },
      {
        cardNumber: '[****0510]',
        money: 641814,
      },
      {
        cardNumber: '[****1388]',
        money: 41241,
      },
      {
        cardNumber: '[****5321]',
        money: 9129,
      },
      {
        cardNumber: '[****3233]',
        money: 21980,
      },
      {
        cardNumber: '[****7138]',
        money: 30193,
      },
    ]
    this.accountService.levels().subscribe(res => {
      if (res.status === 200) {
        this.levelList = res.body;
      }
    })
    this.account = this.stateStorageService.getUser();
    console.log('account', this.account);
  }

  randomBetween1And4() {
    return Math.floor(Math.random() * 4) + 1;
  }

  fakeArray(length: number): any[] {
    return new Array(length).fill(null);
  }

  ngOnInit(): void {
    this.accountService
      .getAuthenticationState()
      .pipe(takeUntil(this.destroy$))
      .subscribe(account => (this.account = account));
  }

  login(): void {
    this.router.navigate(['/login']);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  protected readonly Number = Number;
}
