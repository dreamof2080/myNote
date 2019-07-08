---
sidebarDepth: auto
title: swagger
---


## Swagger使用的注解及其说明
* @Api 用在类上，说明该类的作用
* @ApiOperation 用在方法上，给API增加方法说明
* @ApiImplicitParams: 用在方法上包含一组参数说明
* @ApiImplicitParam: 用在方法上，入参说明
* @ApiResponses: 用在方法上表示一组响应
* @ApiResponse: 用在@ApiResponses中，一般用于表达一个错误的响应信息
 | code: 数字，例如400
 | message: 信息，例如“请求参数为int”
 | response: 抛出异常的类
* @ApiModel: 描述一个Model的信息（一般用在请求参数无法使用@ApiImplicitParam注解进行描述的时候）
 | @ApiModelProperty: 描述一个model的属性
 
@ApiImplicitParam的参数说明：

|    参数名   |  说明    | 其他 |
| ------------- |:-------------|:------------|
| paramType   | 指定参数放在哪个地方 |  header：请求参数放置于Request Header，使用@RequestHeader获取<br>query：请求参数放置于请求地址，使用@RequestParam获取<br>path：（用于restful接口）-->请求参数的获取：@PathVariable<br>body：（不常用）<br>form（不常用）  |
| name | 参数名 | |
| dataType | 参数类型| |
| required | 参数是否必须传 | true / false|
| value | 说明参数的意思 | |
| defaultValue | 参数的默认值 | |
