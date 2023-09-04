import React from 'react';

import category_4 from '../../assets/img/icon_on_frozen.svg';
import category_6 from '../../assets/img/icon_on_ingredient.svg';
import category_7 from '../../assets/img/icon_on_jeon.svg';
import category_5 from '../../assets/img/icon_on_mealkit.svg';
import category_1 from '../../assets/img/icon_on_namul.svg';
import category_8 from '../../assets/img/icon_on_rawmeat.svg';
import category_9 from '../../assets/img/icon_on_salad.svg';
import category_3 from '../../assets/img/icon_on_single.svg';
import category_2 from '../../assets/img/icon_on_soup.svg';
import * as S from './Styles';

function Category() {
  return (
    <S.Div>
      <S.Container>
        <S.Item>
          <S.Img src={category_1} />
          <S.Text>나물무침</S.Text>
        </S.Item>
        <S.Item>
          <S.Img src={category_2} />
          <S.Text>국•찌개</S.Text>
        </S.Item>
        <S.Item>
          <S.Img src={category_3} />
          <S.Text>1인분</S.Text>
        </S.Item>
        <S.Item>
          <S.Img src={category_4} />
          <S.Text>간편냉동</S.Text>
        </S.Item>
        <S.Item>
          <S.Img src={category_5} />
          <S.Text>조림•볶음•찜</S.Text>
        </S.Item>
        <S.Item>
          <S.Img src={category_6} />
          <S.Text>정육•양념육</S.Text>
        </S.Item>
        <S.Item>
          <S.Img src={category_7} />
          <S.Text>김치•절임류</S.Text>
        </S.Item>
        <S.Item>
          <S.Img src={category_8} />
          <S.Text>구이•전</S.Text>
        </S.Item>

        {/* <S.Div3 src={category_1}></S.Div3>
        <S.Div3 src={category_1}></S.Div3>
        <S.Div3 src={category_1}></S.Div3>
        <S.Div3 src={category_1}></S.Div3>
        <S.Div3 src={category_1}></S.Div3>
        <S.Div3 src={category_1}></S.Div3>
        <S.Div3 src={category_1}></S.Div3>
        <S.Div3 src={category_1}></S.Div3> */}
      </S.Container>
      {/* <S.FrameText>
        <S.Frame>
          <S.FrameFluentEmojiGreen
            className="fluent-emoji-green"
            alt="Fluent emoji green"
            src={category_1}
          />
        </S.Frame>
        <S.Label>
          <S.LabelTextWrapper>나물무침</S.LabelTextWrapper>
        </S.Label>
      </S.FrameText>

      <S.FrameText>
        <S.Frame>
          <S.FrameFluentEmojiGreen
            className="fluent-emoji-green"
            alt="Fluent emoji green"
            src={category_2}
          />
        </S.Frame>
        <S.Label>
          <S.LabelTextWrapper>나물무침</S.LabelTextWrapper>
        </S.Label>
      </S.FrameText>

      <S.FrameText>
        <S.Frame>
          <S.FrameFluentEmojiGreen
            className="fluent-emoji-green"
            alt="Fluent emoji green"
            src={category_3}
          />
        </S.Frame>
        <S.Label>
          <S.LabelTextWrapper>1인분</S.LabelTextWrapper>
        </S.Label>
      </S.FrameText>

      <S.FrameText>
        <S.Frame>
          <S.FrameFluentEmojiGreen
            className="fluent-emoji-green"
            alt="Fluent emoji green"
            src={category_4}
          />
        </S.Frame>
        <S.Label>
          <S.LabelTextWrapper>간편냉동</S.LabelTextWrapper>
        </S.Label>
      </S.FrameText>
      <S.FrameText>
        <S.Frame>
          <S.FrameFluentEmojiGreen
            className="fluent-emoji-green"
            alt="Fluent emoji green"
            src={category_5}
          />
        </S.Frame>
        <S.Label>
          <S.LabelTextWrapper>조림•볶음•찜</S.LabelTextWrapper>
        </S.Label>
      </S.FrameText>

      <S.FrameText>
        <S.Frame>
          <S.FrameFluentEmojiGreen
            className="fluent-emoji-green"
            alt="Fluent emoji green"
            src={category_6}
          />
        </S.Frame>
        <S.Label>
          <S.LabelTextWrapper>정육•양념육</S.LabelTextWrapper>
        </S.Label>
      </S.FrameText>

      <S.FrameText>
        <S.Frame>
          <S.FrameFluentEmojiGreen
            className="fluent-emoji-green"
            alt="Fluent emoji green"
            src={category_7}
          />
        </S.Frame>
        <S.Label>
          <S.LabelTextWrapper>김치•절임류</S.LabelTextWrapper>
        </S.Label>
      </S.FrameText>

      <S.FrameText>
        <S.Frame>
          <S.FrameFluentEmojiGreen
            className="fluent-emoji-green"
            alt="Fluent emoji green"
            src={category_8}
          />
        </S.Frame>
        <S.Label>
          <S.LabelTextWrapper>구이•전</S.LabelTextWrapper>
        </S.Label>
      </S.FrameText> */}
      {/* <S.Frame>
        <S.FrameFluentEmojiGreen
          className="fluent-emoji-green"
          alt="Fluent emoji green"
          src={category_2}
        />
      </S.Frame>
      <S.Frame>
        <S.FrameFluentEmojiGreen
          className="fluent-emoji-green"
          alt="Fluent emoji green"
          src={category_3}
        />
      </S.Frame>
      <S.Frame>
        <S.FrameFluentEmojiGreen
          className="fluent-emoji-green"
          alt="Fluent emoji green"
          src={category_4}
        />
      </S.Frame>
      <S.Frame>
        <S.FrameFluentEmojiGreen
          className="fluent-emoji-green"
          alt="Fluent emoji green"
          src={category_5}
        />
      </S.Frame>
      <S.Frame>
        <S.FrameFluentEmojiGreen
          className="fluent-emoji-green"
          alt="Fluent emoji green"
          src={category_6}
        />
      </S.Frame>
      <S.Frame>
        <S.FrameFluentEmojiGreen
          className="fluent-emoji-green"
          alt="Fluent emoji green"
          src={category_7}
        />
      </S.Frame>
      <S.Frame>
        <S.FrameFluentEmojiGreen
          className="fluent-emoji-green"
          alt="Fluent emoji green"
          src={category_8}
        />
      </S.Frame> */}
    </S.Div>
  );
}

export default Category;
