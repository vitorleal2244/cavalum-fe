import { TestBed } from '@angular/core/testing'
import { GalleryComponent } from './gallery.component'

describe('Gallery Component', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      declarations: [GalleryComponent],
    }).compileComponents()
  })

  beforeEach(() => {
    const fixture = TestBed.createComponent(GalleryComponent)
    const app = fixture.componentInstance
  })

  it('should create gallery component', () => {
    
  })
})
