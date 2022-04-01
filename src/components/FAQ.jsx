import React, { Component } from 'react';
import { Accordion } from 'react-bootstrap';
import { Element } from 'react-scroll';

export default class FAQ extends Component {
  // constructor() {
  //   this.state = {}
  // }

  render() {
    return (
      <div>
        <Element className="spacer faq-spacer" name="faq-spacer" />
        <div 
          className="title title-section"
        >
          FAQ
        </div>
        <div className="flex-hc-vc">
          <Accordion 
            defaultActiveKey={['0']} alwaysOpen
            className = "faq-list"
          >
            <Accordion.Item eventKey="0">
              <Accordion.Header
                as={'h5'}
                className="faq-list-single-header"
              >
                1.如何快速减肥？
              </Accordion.Header>
              <Accordion.Body
                className = "faq-list-single-body"
              >
                每个人的身体情况不一样，请咨询专业的健康管理师获得个性化定制方案。减肥背后最基础的科学原理就是热量差：热量差 = 摄入量 - 消耗量
                当热量差是负数的时候，体重就会减轻，所以想要制造热量差的话，得减少摄入量，同时增加消耗量。艾琳的减脂运动里面有阻力和有有氧运动的结合，目的就是增大身体消耗量，从而减少热量差。体重秤上的数字其实并不能定义我们，可以多观察体验自己运动的过程，你感受如何？心情如何？做完3周的计划有没有感到身体更加强壮轻盈，精力更加旺盛？如果有，那你已经做到了！至于体重和身材的变化，那只是一个额外的奖励 。
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header
                as={'h5'}
                className="faq-list-single-header"
              >
                2.如何选择做哪个运动计划？
              </Accordion.Header>
              <Accordion.Body
                className = "faq-list-single-body"
              >
                根据自己的健身目标，每日可用来规划健身的时长，选择适合自己强度和难度的计划。
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header
                as={'h5'}
                className="faq-list-single-header"
              >
                3.我每天要练几个视频？
              </Accordion.Header>
              <Accordion.Body
                className = "faq-list-single-body"
              >
                推荐跟着计划里面列出来的视频个数进行运动，比如今天的计划里面有三个视频，那请坐做3个。
                当然你也可以根据自己实际情况适当调整。
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header
                as={'h5'}
                className="faq-list-single-header"
              >
                4.可以局部减脂吗，比如只瘦肚子？
              </Accordion.Header>
              <Accordion.Body
                className = "faq-list-single-body"
              >
                没有局部减脂，只有局部塑形。减脂是全身一起减的，所以针对瘦肚子的建议是：全身燃脂运动 + 腹部塑性运动。
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header
                as={'h5'}
                className="faq-list-single-header"
              >
                5.生理期可以做吗？
              </Accordion.Header>
              <Accordion.Body
                className = "faq-list-single-body"
              >
                这个取决于你，每个人情况不一样。如果你感觉体力很好，当然可以，但是如果你感觉很累，一定要给自己休息时间。在生理期人的体力体能一般会有所下降，不要因此气馁，可以休息2-3天，然后回来继续。
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="5">
              <Accordion.Header
                as={'h5'}
                className="faq-list-single-header"
              >
                6.男生可以做吗？
              </Accordion.Header>
              <Accordion.Body
                className = "faq-list-single-body"
              >
                当然可以的。艾琳所有的运动计划都是男女友好。
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="6">
              <Accordion.Header
                as={'h5'}
                className="faq-list-single-header"
              >
                7.做这些运动的时候要配合饮食吗？
              </Accordion.Header>
              <Accordion.Body
                className = "faq-list-single-body"
              >
                如果你的目标是减重，那饮食控制是非常重要的，你需要保证在做这些运动的同时吃平衡的营养餐。然而平衡营养餐的标准对每个人来说都是不一样的，请咨询一个有执照的营养师。同时你也可以去参考艾琳的健康餐视频，会得到一些灵感。
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="7">
              <Accordion.Header
                as={'h5'}
                className="faq-list-single-header"
              >
                8.太难了坚持不下来怎么办？
              </Accordion.Header>
              <Accordion.Body
                className = "faq-list-single-body"
              >
                可以选择一个较短的计划开始，比如14天计划。
                可以尝试每天在运动完成之后对镜自拍记录身材，这样一段时间下来就会有明显对比。
                实在太累，可以给自己放几天的小假。
                总的来说，选择适合自己的节奏去运动，尽自己全力去做就好。如果你每天只能做一个视频，那也很棒，至少你有开始运动，可以从低强度的动作开始，慢慢提升体能。注意：如果你在两个视频中间休息大于20分钟，那你可能需要重新热身。
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
        
      </div>
    )
  }
}
