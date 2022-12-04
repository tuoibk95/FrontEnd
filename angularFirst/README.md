# AngularFirst
State                                   Class If true                               Class If False
Control has been visited:               Ng-touched                                  Ng-untouched
Control's value  has changed            Ng-dirty                                    Ng-pristine
control value is valid                  Ng-valid                                    Ng-invalid

# Promise
Một đối tượng thao tác bất đồng bộ: đại diện cho 1 giá trị (đóng gói) có thể chưa có sẵn và trong tương lai sẽ có
pending: gọi request đến server thì promise được khởi tạo
fulfilled: then method xử lý kq khi thành công
rejected: khi fail -> then method để xử lý lỗi .catch => error handling 

# Observable
Giống với promise nhưng có các ưu điểm: Nhận nhiều giá trị ở nhiều thời điểm
Có thể cancell khi request đã gửi đi (promise không có)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
