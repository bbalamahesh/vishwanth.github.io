import React, { Component } from "react";
import Lightbox from "react-image-lightbox";

const images = [
  "https://lh3.googleusercontent.com/06a5ycxmD0Fjt6ers90B01heZgOMcza4R2NomU8Kyfw0UHMMMD0M5ynWeqGVr8Rf9GgLk38tUe2m89z2tq6fHE7bXJTjXf9aV1MVk-CDFYqkTI21L3wBvetzKeeiYPny99jVUp47dBpBpXT7ybtyDCHnrOyS4aZ5VHpWx-a4jNGoX5TJZ8-kACSHwOJiEHL8c6HqjR0YSTDY1qCsaaIAS76EQ3u3UzdeQADy__g0bzABKGKQ_cD8NhMImSO1L2e7uOhlODE6Gn8h7MvUzUCeAcX9QlL--UlRlJ7mZ776dXqVdcjSfQoBaH7h2399y13OhRZac3cSyTLbUduKUFplRrvORMXnjo2LdbyIU3mNJ_2CNOtNw3jdnJTQqzREy6obDuB4Jl8-HR3QpwDc0iF68Xl1mB-gXYPbflzhFNU8oOhuQKHbbnpPyzjzzJXQFekKRCic6cdpSlEGAeG5nL4cdVqoPhuOLn0rcI7k7-8NdHtDu7FsyyHzyBYD4qqY4Yso9IRMD2gAcEC6wwVOzcbjlFq5JG9Cnnh6KH7X3CTEUnvK3b15SdoUtRHFz9NfpicX4xVVgYFRW2KsGEkckSgcDaLnwk6sdewqFndSm8iutzA_J375DRK2I6PMLrXj2JSm_y_LR61ocD8eHYV5U7gTXqeH=s1808-no",
  "https://lh3.googleusercontent.com/frc9rwwgx85BKEFehmOvaSO2eQJyn4EPpTWkIck-J5uGLSct589U8A_4IG6Zc7JON-s6iq3m5j_XB9bwtAfbVBxFEBZfsBFzemb3SbbRRw-nivs0KAaTFpCoxjo6P8jnDxy4b62lHk_dXQ3lBk0bp0Z_GCPqWC8-1XJrypp0n7_MWNnZFNvJxsy8Bj3QTRoCHDPQmhO143i3KZKdNYBMcJ0BYWxPCf8gvC5bUCqXqrDGnjRdygVhxGS2yT0EMfk28dtafXGlTc_Lc0ygF0If2AC5LEA1_dstiYz-Ss_OGQSTkevpnAc6DYntYTKab5SROADBbtczYZkCRM-69zPoKStl1lmJdZSbrjUoc0SofWeofqipBRlVdkIcrVJ-NzgxtSt4WI0VEHMLw7W8xvEk5nJcMk_ulZVsc5cIfLvHipuQiVVUiSmdB-WAr7pGmKUn3fyJFdWKizE3T6Mk8-2NkTa9ax8F6BxIa49BUa2408NvVHfFGkA8P3I7fOuPJl9NYd9JyTB8e2ScNttq8IhJWT3BEOaJW-q9HKgtn-rSB7hbTJkMzwwdtvmNoBIW0kTswJYIVs3BxTNCNELERKhdCvWyhzcDh2J8eq5E8GE1uxdB8-ZztTDevb9AmH6UVuzJizh8wNxriwoQwkEu-C5xk2yB=w1356-h1808-no",
  "https://lh3.googleusercontent.com/qd_Z5KHL5S06oONGtsMIiJmEjglZUDvozODsDmudyKdFYAVVgBmIhcYEahwX__ez3kNALmXf9193oTWtLL2yTJgF7J-EpyjtL7KW0rOtWgbYAURB7-j2xSMlGEuRU9jfuGb1upVKO47MopwTYTyAiacBPks51UDv_bQ_newof_q3A46cP6dXj4yATrvAAsLokpqJnzOSra1BbSju6fN4XO62I8s76XIXFHG_nntlRjGDNBw2nGkx-MiRN8Wtg6j2ikwrxbzs-arMScwoZAPixzaM1j5wMW4VPpbQvMnQTNRIsvpdWth8ImI4GdVoqrCCe5i0NPjad6KQuxRLsPDfWIVsRXeZ2YW1GL9L660XseLYYMsTF6eT7-PA5k082jlMOVzLv6HCyNv2qbND1rmUiVDSm1sTNNwYKqHL4zyz4tHWA8izI9stCm_eChUSNc2hc-_lWIiMFlR_WYkJRYf3MiRQCxIeO1sfANt1ahX3W-LrDxQnezAPZwu1MiOkDhOAoE8s3rBL39Eb3P8UcYyRQRXJLzndt5otA9SvkU5czD2QnBY4mummep14Uvp1efhfyVoxo102PVzsiT4-tUHH01Mtg__wbEYlG9FeyLp84G4Xg02aVcaeziVGVfghT-InpukhCen1XoMeNFEEsfO0in1v=s250-k-no",
  "https://lh3.googleusercontent.com/wtq3IHNZ5gec0suLYxm8Q6rqYml7Mz7oI7aydDpl1zj-7A4Js8KM9WB3QwRHqqSJrUDlN9Y78QoDgvdTNFX-GSvIiLjdfjHGm6817bIwU4UL-BHgxxS-cv2DIhiHFa585oQz8hFdsFDkpddG-9fXEYanCAVhBRBiTitAtbm9u_Sxh_ZkWW06NAT_Ro8NTBKcYOrgF1E_4FtZ3bAC36DHWxqRDbGyyRq9J_Qq-9o_-JdZfS3AFuEcp_xLYj7nHzZJESoMH6Xn9okp6Hg9MHXkikNhtOGGraRvIaiChrb8l8UEh4cEQkYkCcl7_bhiyLUoO9UTP-AspwOqkun-h0yNpUj53ON1v4QoOAmC_jcoxa-RfjfktpgRZHbGtWLabdWG-baXSPYDZCEK1y76i77zKbKd23-olgn4mbyoLDXBou_v0QFd_ZUcClLrJsjVbF_H9NzG6EB8z0NV77bOm2Zt9B1lsdCDeob2cAbXOoPxDA8Rk1r7QRkavoJuoHLBvmysVK7PT41dOytqaUb78bYWYw6Dn9W4ajijsK5dc56i6CJeGXoPOlkxZwAaeB5iD7ghtQviHu7lo3MmVgQrynT0Q07twFdTYTgIf10OJeNWIjXvtye0KRXbdMpmySmDKbeMnQzHcO8AnWn3zXJuVIysJy7J=w960-h1280-no",
  "https://lh3.googleusercontent.com/C3A55tM2oJGZ2PiuiEUl90HuT3MgolKIU1FqnNh7DRP67dL7ZY0kTdAYRQO1HBWPxeyG5lfhXnAkXa7bv0sIWrY9wE_EeYFz8lgX0f0puQSr8c-HExruNmd4zeS55TrYQOKS6cO59kYin1wL4HN2kj61n6BMs_rqVwWxrYSF9sEYT6k0FcTwjuKnRLszY56kHG9xAwlg-ZG5kOTCXfZOLSGZjVrCFWRQ1FKsEh6ciIWQ4a83XyDZ4k5s3wrsLpqD_wYczIqO1FGdQOBxXyQ4DsXiOVRS5PEvW3w11ApM6lLElzZ3icybs2hPZzs9j1HmG7_e_vKgTyjVHHebMAyBiJjIDUENSk4bT0As-_dGtT7yHTk7mrDNwmUYK6kO7GwWD5aJsDcWjnZPcFX2XK2SDAJR22vH7_NBcBDDNSRD8tDCK2NJLaLmcgi83Rx8uJukxd7pRZwbOU1QWSoOR6nAxQuwkM-V0MGpcQtTKJdXe66UZ9C20I31t2mnvLBBT64VVHBL5vyafOCWzzt_2_hhigahR6B4hn-8FYaSQWjD0FepLgV-EPOrSpeUg3EPuk6jIb1QtR1H2cDbCfHbWRJ1KW_spobD1K-XEO5dsyRvwZbcQYyrm4zYfADabybl_uYQUILYkgh0JLmlXO1W-plhJFOC=w1280-h960-no",
  "https://lh3.googleusercontent.com/3vVukZoGKLQBfLzVs8B2D3cHM4scW3qFNyvxgfBuDjfQN43d_z1JHwFk3mqu2akl8CGLSzgdcF0gXn3H8sMmBQ_NckXONzbyihdUbND-nj8zcJjmPQ4x2bGIl64XCDO0EoRs8X7GzU67wD2qvJya96KaM8fvAMbkJKR5FRvIk3m2sqO-KhThO-7HWjLPC6mRTmnAoZZXRiWnz_2MjLUA0pVeMsx7jiK_KPx_Zc4hm_c7iquZ2Ko7fgnbxXgRHn6thhE1dV0fLuX7f71ZqDXzNL1BxI5_fIMkx1o4KXzLb1xyJlZ97bUUAb0S2zgazFNunvMLsOFVjtnZpY7WJHqB1u2Xlju8539_w-HQwfJdBDJlw4C85dcJAxiMfhWHO5zbrfAIp1QrLn9-yZpN3rF3ealc8rjwdCpSeIGmJ6gr3b-oSQVxI3m-6q5hcimDCEZC4SZzE5mtK8b5t_UjP9Px2s5Eh1cAtBiNXca2RdC4_My5qbcWjfl2tJOcZpOG8ywH07fv-qk67EI31bxsWoz_5M9O4R9lNDergxhsv_Mm81DVdZeAjCp2K6ZWGDYDjHyY41vxXT6eVjZq_sa8VKnf2eQOuNWF1huSYZBoW-8Kfl3XV3XDRyv6PaMQfcOIu12M4X8-FxLc1rlsxNMiW9JuFaC5=w1280-h960-no",
  "https://lh3.googleusercontent.com/gs9S_W1Vt_Mk7w0Q0p9sHN-LW5goehEq7h2wU_ytBaFPZQokTA0Ecnf-2GqSG9e0yMZ3VV9-siVA8KcxO-aJRns1hIMI7p5EiNur5nQlp94TN8Gi0RvaKVK-fUtMV6cfHgxM1-HOCnW7UErPAvVXIisQi3F9vD9PE4A_06N4HE8-fG3egEZw3_5So5tbrLAaKfJVl888R7HEacFIMR3q9pKkbz3I-K23vfELLHwu5fHa6Gsa0c9gj1fNJeZFYnu8Gz_04tUGOdseteWSr7XX0KA9DRZddYkQfSwrc4SbgD2I43G444-Te1VfOuC-el_GFRjgOzJZjiOsba0i7DCn9rVxTmMCOLxeibcU79xYgp_EDZJuFfL3vSSPX7UXTF-4f6pBoBb_gQwoYHMgSvcESzSq_r6kcBR8t2gVVkvr0YXEASngEu0Q1UlfQHh99X9uczk6eC5Unv9HExCuQdcCUvLYcewLKgBglmqY6N87iZI6wl0zs4zbqQWNIvAjwhQ6JdQzKzHqsnR81m0FhYcSMJ6hc2c1CdPoqD3z2Nz7ETow8u6-MalhkGCoOjaSIijW2vJL15W_hHERDdXx7zefDzm1jibXVLsFhaYpgZTM6G0DQ9K9966diMCkPDGGLl2A7uneWwZHaH20o_80Ug3BvxLB=w1280-h960-no",
  "https://lh3.googleusercontent.com/22H-dcHTsOblRgUJfutjb8spMvRMSg5hNPIcYEDb3hXzglyqGgGhg6xwJre_rEDbuRKDD1scOPlyn0wS1VPRpPoJWPKkRLIytzzqbOKzt5G26M6nmD22vP8qfQ_8IFRq2qd2rvliMmGhtRRMzaYIOxlHEAexB9D9ViZiBJbmc4xE4WAk1rumTcJQxwPyAql4Z58Q0pgVPXobInV_nFqiHGDRfGrMF6W6tmCJo1KbP1HuYu66yI3cC1q0nk6-t8ExI7B4kZdDUuZpxAxJa1uimYnXUcv_x_6KXtq3Yc-kcEv-zqlFwsuK63ZAVXwUEEabnv1wePjF7GQUmop9lIm-fs_Zvl7K3LYuUFNTGEEIguEo-c-1MSrfH4332F-Lre7TzXfZbaMLr42Q-AlKSJfdE9BsAIZkuzvtvuiP7Cc111tdXO0Ou07dzE-Kh0PnM2yrtbVSgtHV07QY4hjunuQrdEZIH3I3uLLjeqJaPMvwiUd91nRzwygNUYzOmQueqQ4L1M6Jwmg0B_tyoL48MmPKz8YgZNnCH1QjLCUWNSQWqnMJtvoFOH3j-yiJRGK2OmhHYiOaVsGaklyRnJ7zzA75SWHqtsGwWUoS7rPOklpv1HdQvo4kdswo8Yw7rSOwZdr0EE0pLeNosnH_ZzkBtoqCvKXb=w1356-h1808-no",
  "https://lh3.googleusercontent.com/2i5Uy_7u9o5iiMScFOEUdN1x58SHKiynNlJv6zMq3LVpUgtqNVaQkklv426XmbTpZ2QrV6xD6Aq1dKSUw5nxOmIVOchzviksdTHCB-GLC2Lc0xAPHMaxd2LrNJdw5dD7GG6aX_XwUQfjq2Mdvhzt-2luGvXAxw4Kx4wZOc55XfTTVKjlzswARsahY0RKAj3TOBdJty44cYm73Xrn-mZW7F4DbqTQOQEa831cI8iRU0yUcTaTsYfo3mHTLglC_zox9nMw0sSKyB4A01L6plvIy9Sw_RvflYzCNgW-PCgJ72mKkp32aDMorF3suUaabNemIQqARJrvBYv1LFhXYcqxpbMDp9Yig5YrcKPqcnhzEuZ3-uBluiCwUQkYLpxiwjSizCl7p9RxtVJ5BNE6bHCivhsgANIWFpe8cfyCfk2DggpBGIClmNXfzG_2UnZBwbsU0XtSV27rGAb2pErKGFsc96zW3U5_wsdd274QDfE4i224-nfUtL6BG3BQWQONjZyK4hAjCaCi0pWUthMx83jcr14V5yu9cn3XHxJvFkcqjYulxPZfcyXNuKSOuQQTSiNGjgPn48IphD3djUQjry8w1R_7Rqkph0qDbQYUCFmLLp3Okcd8jrQV_ulaO_51dVXwYH51TtvmUd_r1x82eLdAQRuO=w1280-h960-no"

];

class PhotoGrid extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photoIndex: 0,
      isOpen: false
    };
  }

  render() {
    const { photoIndex, isOpen } = this.state;

    return (
      <div>
        <div className="columns">

          <div class="card">
            <div class="card-image">
              <figure class="image is-4by3">
                <img alt="" src="https://lh3.googleusercontent.com/06a5ycxmD0Fjt6ers90B01heZgOMcza4R2NomU8Kyfw0UHMMMD0M5ynWeqGVr8Rf9GgLk38tUe2m89z2tq6fHE7bXJTjXf9aV1MVk-CDFYqkTI21L3wBvetzKeeiYPny99jVUp47dBpBpXT7ybtyDCHnrOyS4aZ5VHpWx-a4jNGoX5TJZ8-kACSHwOJiEHL8c6HqjR0YSTDY1qCsaaIAS76EQ3u3UzdeQADy__g0bzABKGKQ_cD8NhMImSO1L2e7uOhlODE6Gn8h7MvUzUCeAcX9QlL--UlRlJ7mZ776dXqVdcjSfQoBaH7h2399y13OhRZac3cSyTLbUduKUFplRrvORMXnjo2LdbyIU3mNJ_2CNOtNw3jdnJTQqzREy6obDuB4Jl8-HR3QpwDc0iF68Xl1mB-gXYPbflzhFNU8oOhuQKHbbnpPyzjzzJXQFekKRCic6cdpSlEGAeG5nL4cdVqoPhuOLn0rcI7k7-8NdHtDu7FsyyHzyBYD4qqY4Yso9IRMD2gAcEC6wwVOzcbjlFq5JG9Cnnh6KH7X3CTEUnvK3b15SdoUtRHFz9NfpicX4xVVgYFRW2KsGEkckSgcDaLnwk6sdewqFndSm8iutzA_J375DRK2I6PMLrXj2JSm_y_LR61ocD8eHYV5U7gTXqeH=s1808-no" onClick={() => this.setState({ isOpen: true })} width="120" height="120" />
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                {/* <div class="media-left">
                <figure class="image is-48x48">
                  <img src="https://versions.bulma.io/0.7.0/images/placeholders/96x96.png" alt="Placeholder image" />
                </figure>
              </div> */}
                <div class="media-content">
                  <p class="title is-4">John Smith</p>
                  <p class="subtitle is-6">@johnsmith</p>
                </div>
              </div>

              <div class="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Phasellus nec iaculis mauris. <a>@bulmaio</a>.
      <a href="#">#css</a> <a href="#">#responsive</a>
                <br />
                <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
              </div>
            </div>
          </div>

          <div class="card">
            <div class="card-image">
              <figure class="image is-4by3">
                <img alt="" src="https://lh3.googleusercontent.com/frc9rwwgx85BKEFehmOvaSO2eQJyn4EPpTWkIck-J5uGLSct589U8A_4IG6Zc7JON-s6iq3m5j_XB9bwtAfbVBxFEBZfsBFzemb3SbbRRw-nivs0KAaTFpCoxjo6P8jnDxy4b62lHk_dXQ3lBk0bp0Z_GCPqWC8-1XJrypp0n7_MWNnZFNvJxsy8Bj3QTRoCHDPQmhO143i3KZKdNYBMcJ0BYWxPCf8gvC5bUCqXqrDGnjRdygVhxGS2yT0EMfk28dtafXGlTc_Lc0ygF0If2AC5LEA1_dstiYz-Ss_OGQSTkevpnAc6DYntYTKab5SROADBbtczYZkCRM-69zPoKStl1lmJdZSbrjUoc0SofWeofqipBRlVdkIcrVJ-NzgxtSt4WI0VEHMLw7W8xvEk5nJcMk_ulZVsc5cIfLvHipuQiVVUiSmdB-WAr7pGmKUn3fyJFdWKizE3T6Mk8-2NkTa9ax8F6BxIa49BUa2408NvVHfFGkA8P3I7fOuPJl9NYd9JyTB8e2ScNttq8IhJWT3BEOaJW-q9HKgtn-rSB7hbTJkMzwwdtvmNoBIW0kTswJYIVs3BxTNCNELERKhdCvWyhzcDh2J8eq5E8GE1uxdB8-ZztTDevb9AmH6UVuzJizh8wNxriwoQwkEu-C5xk2yB=w1356-h1808-no" onClick={() => this.setState({ isOpen: true })} width="120" height="120" />
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                {/* <div class="media-left">
                <figure class="image is-48x48">
                  <img src="https://versions.bulma.io/0.7.0/images/placeholders/96x96.png" alt="Placeholder image" />
                </figure>
              </div> */}
                <div class="media-content">
                  <p class="title is-4">John Smith</p>
                  <p class="subtitle is-6">@johnsmith</p>
                </div>
              </div>

              <div class="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Phasellus nec iaculis mauris. <a>@bulmaio</a>.
      <a href="#">#css</a> <a href="#">#responsive</a>
                <br />
                <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
              </div>
            </div>
          </div>

          <div class="card">
            <div class="card-image">
              <figure class="image is-4by3">
                <img alt="" src="https://lh3.googleusercontent.com/qd_Z5KHL5S06oONGtsMIiJmEjglZUDvozODsDmudyKdFYAVVgBmIhcYEahwX__ez3kNALmXf9193oTWtLL2yTJgF7J-EpyjtL7KW0rOtWgbYAURB7-j2xSMlGEuRU9jfuGb1upVKO47MopwTYTyAiacBPks51UDv_bQ_newof_q3A46cP6dXj4yATrvAAsLokpqJnzOSra1BbSju6fN4XO62I8s76XIXFHG_nntlRjGDNBw2nGkx-MiRN8Wtg6j2ikwrxbzs-arMScwoZAPixzaM1j5wMW4VPpbQvMnQTNRIsvpdWth8ImI4GdVoqrCCe5i0NPjad6KQuxRLsPDfWIVsRXeZ2YW1GL9L660XseLYYMsTF6eT7-PA5k082jlMOVzLv6HCyNv2qbND1rmUiVDSm1sTNNwYKqHL4zyz4tHWA8izI9stCm_eChUSNc2hc-_lWIiMFlR_WYkJRYf3MiRQCxIeO1sfANt1ahX3W-LrDxQnezAPZwu1MiOkDhOAoE8s3rBL39Eb3P8UcYyRQRXJLzndt5otA9SvkU5czD2QnBY4mummep14Uvp1efhfyVoxo102PVzsiT4-tUHH01Mtg__wbEYlG9FeyLp84G4Xg02aVcaeziVGVfghT-InpukhCen1XoMeNFEEsfO0in1v=s250-k-no" onClick={() => this.setState({ isOpen: true })} width="120" height="120" />
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                {/* <div class="media-left">
                <figure class="image is-48x48">
                  <img src="https://versions.bulma.io/0.7.0/images/placeholders/96x96.png" alt="Placeholder image" />
                </figure>
              </div> */}
                <div class="media-content">
                  <p class="title is-4">John Smith</p>
                  <p class="subtitle is-6">@johnsmith</p>
                </div>
              </div>

              <div class="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Phasellus nec iaculis mauris. <a>@bulmaio</a>.
      <a href="#">#css</a> <a href="#">#responsive</a>
                <br />
                <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
              </div>
            </div>
          </div>

          <div class="card">
            <div class="card-image">
              <figure class="image is-4by3">
                <img alt="" src="https://lh3.googleusercontent.com/wtq3IHNZ5gec0suLYxm8Q6rqYml7Mz7oI7aydDpl1zj-7A4Js8KM9WB3QwRHqqSJrUDlN9Y78QoDgvdTNFX-GSvIiLjdfjHGm6817bIwU4UL-BHgxxS-cv2DIhiHFa585oQz8hFdsFDkpddG-9fXEYanCAVhBRBiTitAtbm9u_Sxh_ZkWW06NAT_Ro8NTBKcYOrgF1E_4FtZ3bAC36DHWxqRDbGyyRq9J_Qq-9o_-JdZfS3AFuEcp_xLYj7nHzZJESoMH6Xn9okp6Hg9MHXkikNhtOGGraRvIaiChrb8l8UEh4cEQkYkCcl7_bhiyLUoO9UTP-AspwOqkun-h0yNpUj53ON1v4QoOAmC_jcoxa-RfjfktpgRZHbGtWLabdWG-baXSPYDZCEK1y76i77zKbKd23-olgn4mbyoLDXBou_v0QFd_ZUcClLrJsjVbF_H9NzG6EB8z0NV77bOm2Zt9B1lsdCDeob2cAbXOoPxDA8Rk1r7QRkavoJuoHLBvmysVK7PT41dOytqaUb78bYWYw6Dn9W4ajijsK5dc56i6CJeGXoPOlkxZwAaeB5iD7ghtQviHu7lo3MmVgQrynT0Q07twFdTYTgIf10OJeNWIjXvtye0KRXbdMpmySmDKbeMnQzHcO8AnWn3zXJuVIysJy7J=w960-h1280-no" onClick={() => this.setState({ isOpen: true })} width="120" height="120" />
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                {/* <div class="media-left">
                <figure class="image is-48x48">
                  <img src="https://versions.bulma.io/0.7.0/images/placeholders/96x96.png" alt="Placeholder image" />
                </figure>
              </div> */}
                <div class="media-content">
                  <p class="title is-4">John Smith</p>
                  <p class="subtitle is-6">@johnsmith</p>
                </div>
              </div>

              <div class="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Phasellus nec iaculis mauris. <a>@bulmaio</a>.
      <a href="#">#css</a> <a href="#">#responsive</a>
                <br />
                <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
              </div>
            </div>
          </div>

          <div class="card">
            <div class="card-image">
              <figure class="image is-4by3">
                <img alt="" src="https://lh3.googleusercontent.com/C3A55tM2oJGZ2PiuiEUl90HuT3MgolKIU1FqnNh7DRP67dL7ZY0kTdAYRQO1HBWPxeyG5lfhXnAkXa7bv0sIWrY9wE_EeYFz8lgX0f0puQSr8c-HExruNmd4zeS55TrYQOKS6cO59kYin1wL4HN2kj61n6BMs_rqVwWxrYSF9sEYT6k0FcTwjuKnRLszY56kHG9xAwlg-ZG5kOTCXfZOLSGZjVrCFWRQ1FKsEh6ciIWQ4a83XyDZ4k5s3wrsLpqD_wYczIqO1FGdQOBxXyQ4DsXiOVRS5PEvW3w11ApM6lLElzZ3icybs2hPZzs9j1HmG7_e_vKgTyjVHHebMAyBiJjIDUENSk4bT0As-_dGtT7yHTk7mrDNwmUYK6kO7GwWD5aJsDcWjnZPcFX2XK2SDAJR22vH7_NBcBDDNSRD8tDCK2NJLaLmcgi83Rx8uJukxd7pRZwbOU1QWSoOR6nAxQuwkM-V0MGpcQtTKJdXe66UZ9C20I31t2mnvLBBT64VVHBL5vyafOCWzzt_2_hhigahR6B4hn-8FYaSQWjD0FepLgV-EPOrSpeUg3EPuk6jIb1QtR1H2cDbCfHbWRJ1KW_spobD1K-XEO5dsyRvwZbcQYyrm4zYfADabybl_uYQUILYkgh0JLmlXO1W-plhJFOC=w1280-h960-no" onClick={() => this.setState({ isOpen: true })} width="120" height="120" />
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                {/* <div class="media-left">
                <figure class="image is-48x48">
                  <img src="https://versions.bulma.io/0.7.0/images/placeholders/96x96.png" alt="Placeholder image" />
                </figure>
              </div> */}
                <div class="media-content">
                  <p class="title is-4">John Smith</p>
                  <p class="subtitle is-6">@johnsmith</p>
                </div>
              </div>

              <div class="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Phasellus nec iaculis mauris. <a>@bulmaio</a>.
      <a href="#">#css</a> <a href="#">#responsive</a>
                <br />
                <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
              </div>
            </div>
          </div>

          <div class="card">
            <div class="card-image">
              <figure class="image is-4by3">
                <img alt="" src="https://lh3.googleusercontent.com/3vVukZoGKLQBfLzVs8B2D3cHM4scW3qFNyvxgfBuDjfQN43d_z1JHwFk3mqu2akl8CGLSzgdcF0gXn3H8sMmBQ_NckXONzbyihdUbND-nj8zcJjmPQ4x2bGIl64XCDO0EoRs8X7GzU67wD2qvJya96KaM8fvAMbkJKR5FRvIk3m2sqO-KhThO-7HWjLPC6mRTmnAoZZXRiWnz_2MjLUA0pVeMsx7jiK_KPx_Zc4hm_c7iquZ2Ko7fgnbxXgRHn6thhE1dV0fLuX7f71ZqDXzNL1BxI5_fIMkx1o4KXzLb1xyJlZ97bUUAb0S2zgazFNunvMLsOFVjtnZpY7WJHqB1u2Xlju8539_w-HQwfJdBDJlw4C85dcJAxiMfhWHO5zbrfAIp1QrLn9-yZpN3rF3ealc8rjwdCpSeIGmJ6gr3b-oSQVxI3m-6q5hcimDCEZC4SZzE5mtK8b5t_UjP9Px2s5Eh1cAtBiNXca2RdC4_My5qbcWjfl2tJOcZpOG8ywH07fv-qk67EI31bxsWoz_5M9O4R9lNDergxhsv_Mm81DVdZeAjCp2K6ZWGDYDjHyY41vxXT6eVjZq_sa8VKnf2eQOuNWF1huSYZBoW-8Kfl3XV3XDRyv6PaMQfcOIu12M4X8-FxLc1rlsxNMiW9JuFaC5=w1280-h960-no" onClick={() => this.setState({ isOpen: true })} width="120" height="120" />
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                {/* <div class="media-left">
                <figure class="image is-48x48">
                  <img src="https://versions.bulma.io/0.7.0/images/placeholders/96x96.png" alt="Placeholder image" />
                </figure>
              </div> */}
                <div class="media-content">
                  <p class="title is-4">John Smith</p>
                  <p class="subtitle is-6">@johnsmith</p>
                </div>
              </div>

              <div class="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Phasellus nec iaculis mauris. <a>@bulmaio</a>.
      <a href="#">#css</a> <a href="#">#responsive</a>
                <br />
                <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
              </div>
            </div>
          </div>

          <div class="card">
            <div class="card-image">
              <figure class="image is-4by3">
                <img alt="" src="https://lh3.googleusercontent.com/gs9S_W1Vt_Mk7w0Q0p9sHN-LW5goehEq7h2wU_ytBaFPZQokTA0Ecnf-2GqSG9e0yMZ3VV9-siVA8KcxO-aJRns1hIMI7p5EiNur5nQlp94TN8Gi0RvaKVK-fUtMV6cfHgxM1-HOCnW7UErPAvVXIisQi3F9vD9PE4A_06N4HE8-fG3egEZw3_5So5tbrLAaKfJVl888R7HEacFIMR3q9pKkbz3I-K23vfELLHwu5fHa6Gsa0c9gj1fNJeZFYnu8Gz_04tUGOdseteWSr7XX0KA9DRZddYkQfSwrc4SbgD2I43G444-Te1VfOuC-el_GFRjgOzJZjiOsba0i7DCn9rVxTmMCOLxeibcU79xYgp_EDZJuFfL3vSSPX7UXTF-4f6pBoBb_gQwoYHMgSvcESzSq_r6kcBR8t2gVVkvr0YXEASngEu0Q1UlfQHh99X9uczk6eC5Unv9HExCuQdcCUvLYcewLKgBglmqY6N87iZI6wl0zs4zbqQWNIvAjwhQ6JdQzKzHqsnR81m0FhYcSMJ6hc2c1CdPoqD3z2Nz7ETow8u6-MalhkGCoOjaSIijW2vJL15W_hHERDdXx7zefDzm1jibXVLsFhaYpgZTM6G0DQ9K9966diMCkPDGGLl2A7uneWwZHaH20o_80Ug3BvxLB=w1280-h960-no" onClick={() => this.setState({ isOpen: true })} width="120" height="120" />
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                {/* <div class="media-left">
                <figure class="image is-48x48">
                  <img src="https://versions.bulma.io/0.7.0/images/placeholders/96x96.png" alt="Placeholder image" />
                </figure>
              </div> */}
                <div class="media-content">
                  <p class="title is-4">John Smith</p>
                  <p class="subtitle is-6">@johnsmith</p>
                </div>
              </div>

              <div class="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Phasellus nec iaculis mauris. <a>@bulmaio</a>.
      <a href="#">#css</a> <a href="#">#responsive</a>
                <br />
                <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
              </div>
            </div>
          </div>

          <div class="card">
            <div class="card-image">
              <figure class="image is-4by3">
                <img alt="" src="https://lh3.googleusercontent.com/22H-dcHTsOblRgUJfutjb8spMvRMSg5hNPIcYEDb3hXzglyqGgGhg6xwJre_rEDbuRKDD1scOPlyn0wS1VPRpPoJWPKkRLIytzzqbOKzt5G26M6nmD22vP8qfQ_8IFRq2qd2rvliMmGhtRRMzaYIOxlHEAexB9D9ViZiBJbmc4xE4WAk1rumTcJQxwPyAql4Z58Q0pgVPXobInV_nFqiHGDRfGrMF6W6tmCJo1KbP1HuYu66yI3cC1q0nk6-t8ExI7B4kZdDUuZpxAxJa1uimYnXUcv_x_6KXtq3Yc-kcEv-zqlFwsuK63ZAVXwUEEabnv1wePjF7GQUmop9lIm-fs_Zvl7K3LYuUFNTGEEIguEo-c-1MSrfH4332F-Lre7TzXfZbaMLr42Q-AlKSJfdE9BsAIZkuzvtvuiP7Cc111tdXO0Ou07dzE-Kh0PnM2yrtbVSgtHV07QY4hjunuQrdEZIH3I3uLLjeqJaPMvwiUd91nRzwygNUYzOmQueqQ4L1M6Jwmg0B_tyoL48MmPKz8YgZNnCH1QjLCUWNSQWqnMJtvoFOH3j-yiJRGK2OmhHYiOaVsGaklyRnJ7zzA75SWHqtsGwWUoS7rPOklpv1HdQvo4kdswo8Yw7rSOwZdr0EE0pLeNosnH_ZzkBtoqCvKXb=w1356-h1808-no" onClick={() => this.setState({ isOpen: true })} width="120" height="120" />
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                {/* <div class="media-left">
                <figure class="image is-48x48">
                  <img src="https://versions.bulma.io/0.7.0/images/placeholders/96x96.png" alt="Placeholder image" />
                </figure>
              </div> */}
                <div class="media-content">
                  <p class="title is-4">John Smith</p>
                  <p class="subtitle is-6">@johnsmith</p>
                </div>
              </div>

              <div class="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Phasellus nec iaculis mauris. <a>@bulmaio</a>.
      <a href="#">#css</a> <a href="#">#responsive</a>
                <br />
                <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
              </div>
            </div>
          </div>

          <div class="card">
            <div class="card-image">
              <figure class="image is-4by3">
                <img alt="" src="https://lh3.googleusercontent.com/2i5Uy_7u9o5iiMScFOEUdN1x58SHKiynNlJv6zMq3LVpUgtqNVaQkklv426XmbTpZ2QrV6xD6Aq1dKSUw5nxOmIVOchzviksdTHCB-GLC2Lc0xAPHMaxd2LrNJdw5dD7GG6aX_XwUQfjq2Mdvhzt-2luGvXAxw4Kx4wZOc55XfTTVKjlzswARsahY0RKAj3TOBdJty44cYm73Xrn-mZW7F4DbqTQOQEa831cI8iRU0yUcTaTsYfo3mHTLglC_zox9nMw0sSKyB4A01L6plvIy9Sw_RvflYzCNgW-PCgJ72mKkp32aDMorF3suUaabNemIQqARJrvBYv1LFhXYcqxpbMDp9Yig5YrcKPqcnhzEuZ3-uBluiCwUQkYLpxiwjSizCl7p9RxtVJ5BNE6bHCivhsgANIWFpe8cfyCfk2DggpBGIClmNXfzG_2UnZBwbsU0XtSV27rGAb2pErKGFsc96zW3U5_wsdd274QDfE4i224-nfUtL6BG3BQWQONjZyK4hAjCaCi0pWUthMx83jcr14V5yu9cn3XHxJvFkcqjYulxPZfcyXNuKSOuQQTSiNGjgPn48IphD3djUQjry8w1R_7Rqkph0qDbQYUCFmLLp3Okcd8jrQV_ulaO_51dVXwYH51TtvmUd_r1x82eLdAQRuO=w1280-h960-no" onClick={() => this.setState({ isOpen: true })} width="120" height="120" />
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                {/* <div class="media-left">
                <figure class="image is-48x48">
                  <img src="https://versions.bulma.io/0.7.0/images/placeholders/96x96.png" alt="Placeholder image" />
                </figure>
              </div> */}
                <div class="media-content">
                  <p class="title is-4">John Smith</p>
                  <p class="subtitle is-6">@johnsmith</p>
                </div>
              </div>

              <div class="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Phasellus nec iaculis mauris. <a>@bulmaio</a>.
      <a href="#">#css</a> <a href="#">#responsive</a>
                <br />
                <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
              </div>
            </div>
          </div>

        </div>
        {/* <img alt="" src="https://lh3.googleusercontent.com/06a5ycxmD0Fjt6ers90B01heZgOMcza4R2NomU8Kyfw0UHMMMD0M5ynWeqGVr8Rf9GgLk38tUe2m89z2tq6fHE7bXJTjXf9aV1MVk-CDFYqkTI21L3wBvetzKeeiYPny99jVUp47dBpBpXT7ybtyDCHnrOyS4aZ5VHpWx-a4jNGoX5TJZ8-kACSHwOJiEHL8c6HqjR0YSTDY1qCsaaIAS76EQ3u3UzdeQADy__g0bzABKGKQ_cD8NhMImSO1L2e7uOhlODE6Gn8h7MvUzUCeAcX9QlL--UlRlJ7mZ776dXqVdcjSfQoBaH7h2399y13OhRZac3cSyTLbUduKUFplRrvORMXnjo2LdbyIU3mNJ_2CNOtNw3jdnJTQqzREy6obDuB4Jl8-HR3QpwDc0iF68Xl1mB-gXYPbflzhFNU8oOhuQKHbbnpPyzjzzJXQFekKRCic6cdpSlEGAeG5nL4cdVqoPhuOLn0rcI7k7-8NdHtDu7FsyyHzyBYD4qqY4Yso9IRMD2gAcEC6wwVOzcbjlFq5JG9Cnnh6KH7X3CTEUnvK3b15SdoUtRHFz9NfpicX4xVVgYFRW2KsGEkckSgcDaLnwk6sdewqFndSm8iutzA_J375DRK2I6PMLrXj2JSm_y_LR61ocD8eHYV5U7gTXqeH=s1808-no" onClick={() => this.setState({ isOpen: true })} width="120" height="120" />
        <img alt="" src="https://lh3.googleusercontent.com/frc9rwwgx85BKEFehmOvaSO2eQJyn4EPpTWkIck-J5uGLSct589U8A_4IG6Zc7JON-s6iq3m5j_XB9bwtAfbVBxFEBZfsBFzemb3SbbRRw-nivs0KAaTFpCoxjo6P8jnDxy4b62lHk_dXQ3lBk0bp0Z_GCPqWC8-1XJrypp0n7_MWNnZFNvJxsy8Bj3QTRoCHDPQmhO143i3KZKdNYBMcJ0BYWxPCf8gvC5bUCqXqrDGnjRdygVhxGS2yT0EMfk28dtafXGlTc_Lc0ygF0If2AC5LEA1_dstiYz-Ss_OGQSTkevpnAc6DYntYTKab5SROADBbtczYZkCRM-69zPoKStl1lmJdZSbrjUoc0SofWeofqipBRlVdkIcrVJ-NzgxtSt4WI0VEHMLw7W8xvEk5nJcMk_ulZVsc5cIfLvHipuQiVVUiSmdB-WAr7pGmKUn3fyJFdWKizE3T6Mk8-2NkTa9ax8F6BxIa49BUa2408NvVHfFGkA8P3I7fOuPJl9NYd9JyTB8e2ScNttq8IhJWT3BEOaJW-q9HKgtn-rSB7hbTJkMzwwdtvmNoBIW0kTswJYIVs3BxTNCNELERKhdCvWyhzcDh2J8eq5E8GE1uxdB8-ZztTDevb9AmH6UVuzJizh8wNxriwoQwkEu-C5xk2yB=w1356-h1808-no" onClick={() => this.setState({ isOpen: true })} width="120" height="120" /> */}

        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length
              })
            }
          />
        )}
      </div>
    );
  }
}

export default PhotoGrid;