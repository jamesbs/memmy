import { Injectable } from '@nestjs/common';
import { IGalleryService } from './gallery.interface';
import { User, Gallery, id } from '@memmy/model';
import { galleryMockDb } from './gallery-mock-db';

@Injectable()
export class GalleryService implements IGalleryService {
  getUserGallery(user: User, galleryId: string) {
    return galleryMockDb[id(user)][galleryId];
  }

  getUserGalleries(user: User): Gallery[] {
    return [
      {
        id: 'f2bc5d3b-d513-4284-b3b5-97d841a89659',
        title: 'Christmas 2016',
        count: 6,
        thumbs: {
          full: 'https://lh3.googleusercontent.com/B6b6po1DNvY5CeUaEmLoX09pjRPp8nTvEdLBSPF7YlHca3il047r2_oiwYine8awF6ndBgb2sIDjljvZ2dmND0NsJxg2XNCOm6wTxwt_vabxilCAyVXbxTjdmOgTnSW8ezy2Yz-GMg=w1290-h1718-no',
        },
      },
      {
        id: 'f2bc5d3b-d513-4284-b3b5-97d841a89659',
        title: 'Japan 2016',
        count: 706,
        thumbs: {
          full: 'https://lh3.googleusercontent.com/3YZ8BA1FIvfxEj5Q62u7IYROQwrYD7iv_eQUWq--pGu3KngXqTBjFwxopNH11-ywTojZR1-mzeuUbPsL2rUHPQHoWVn81HaEny40G7209tr90PhgkLtrSSjKgdZOoJO-TMAU3VasLcLSM_rphSa0VC0hi_0tshd-2VIkn6FAPHbylT9yOiFTOAMsRL3eK9NFthcUD23FXYbdpba3V0YBLuURjEiIGg5QNXG8XF15wh0nVr5_3y0hn-4tiT6K9fKeXsKxFko90yHqv-kHhEvz7KBbslk3Eg7QH5EqiOuamSRQpiMTh8RmeK0ZC3gAbN8vyIGGrEv63kqKC06jxTT0KUEi1rIoT4nAbNu6i47lRbvVQA5W5uzFl3-XwqqPmMR8jJsLLqPqYKsVCXnf0rVmoa0MJgSzEPOKHYPeA4BvCCTa_frS-hzF1T_8LspVRHB-lKBCms8THUFqWeqIf0ah6vthsZzsn4YMwJc_RvyIZwHXJbHgxWtkVbdpdccGhB7wgrqG871ej90AOmgKMRVCLwA0X-wlxvKHSTguEDPdAcJJaYDXBYXTHD7Bpdb74yseHFPEFyACK0Bw6bXuJkDgcuLcOGEkIRQQMauTA4MM0rB5tCC36FjVfum2bYeTHllsG5EKZYAgEF6rHlueV8RGHUt-wGURJrdxg6z5LQOG7Nrd529EsHpd-o1Hrqx7gA9NUXa_wffd_Znh_0J00Q0UOCzL=w2462-h1632-no',
        },
      },
      {
        id: 'bb2c2fdd-d97c-49ff-b8ad-21dc4b5afa86',
        title: 'China 2016',
        count: 80,
        thumbs: {
          full: 'https://lh3.googleusercontent.com/r9NVDAn2DJS-9TXtjOtaOURbXT6ft0XWhpv887Vp69F0-cd0EwA9yAcWa5MuQRWfkPANvADHU8Lhqk6dFAcj78dZewH80H0VD8y5k9PBKefS6XmYqiR3XY8rpVd5tb_p1g1d-dF_GWQWnpKMolNj64rkrlQhZ100_3s_uQaF6p72KhlUXFxtwwdexyXNIUU7yOhMh19Odf35SD4jvjeJnId4drffp3WopAOrFBzhbmDSkmjaGJN3CX8EtpIMUOoyRbpJmxuHa_W0yzmS4Lo6VzWR9jsR71FIODhJX6E-LIu8IH75FLXZsumFcOufZzGMljQRkcezNh0wwTuHmu2TgR4uMa-pSOT2hdDREy1rbxQoRpV8ep-Vh9o1Ar4pZQZpRbesGZf8VljpYwwibkAwinbE0AT27PoILNciUvPdreVRsEyjSu75rOS2VbiJ1hbnix1BhFKQvhd32j53AYPFsQzeZLRXfnP0BC_HDPtueE_XyJoZuu1yRZIZrG0h44iarKw1_f32Rjy8bqW6ueAgPo2pGcvz-LVc1PfZo1Kk244Y1w0MTxb1R9hcz3TigoUnSTmBXzUZo7i1sNb0OJ6Qtt1-uYmBOrTjNYFbNNZAEcm7EubbM7gS1OCWa8uXqAof58QnyAigpiQ76lQZ4sBKKR60qYOi9TjDbo24-NekVtBHotDrL9qi-wwWw6FGbTT8vf5bfnGn3SgYLr7ZYvQEK3zE=w2378-h1718-no'
        },
      },
    ];
  }
}
