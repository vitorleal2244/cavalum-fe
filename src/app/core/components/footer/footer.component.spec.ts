import { ComponentFixture, TestBed } from '@angular/core/testing'
import { FooterComponent } from './footer.component'

describe('Footer Component', () => {
  let component = FooterComponent
  let fixture = ComponentFixture<FooterComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterComponent],
    }).compileComponents()
  })

  it('should create footer component', () => {
    expect(component).toBeTruthy()
  })
})
