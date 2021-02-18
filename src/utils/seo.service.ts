import {Injectable} from '@angular/core';
import {Meta, MetaDefinition, Title} from "@angular/platform-browser";

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  constructor(private title: Title, private meta: Meta) {
  }

  initMetaData(){
    this.title.setTitle('Ponddy® HSK - Home')
    this.meta.addTags([
      {
        name: 'keywords',
        content: 'learning, education, ai, chinese, mandarin, tutors, reader, ponddy, in few minutes, quickly learn, study, self-study, online'
      },
      {
        name: 'description',
        content: 'Ponddy® HSK is the first online HSK test center in the U.S.A. that offers at-home online testing services for HSK, HSKK, YCT, and BCT official Chinese language tests.'
      },
      {name: 'robots', content: 'index, follow'},
      {name: 'copyright', content: 'Ponddy Education Inc'},
      {name: 'author', content: 'Ponddy Education Inc'},
      {name: 'classification', content: 'learning, chinese'}
    ]);
  }

  updateTitle(title: string) {
    this.title.setTitle(title);
  }

  updateOgUrl(url: string) {
    this.meta.updateTag({name: 'og:url', content: url})
  }

  updateDescription(desc: string) {
    this.meta.updateTag({name: 'description', content: desc})
  }

  updateMetaTags(metaTags: MetaDefinition[]) {
    metaTags.forEach(m => this.meta.updateTag(m));
  }
}
