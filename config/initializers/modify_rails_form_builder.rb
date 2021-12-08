class ActionView::Helpers::FormBuilder
  def error_message_for(field_name)
    if self.object.errors[field_name].present?
      model_name              = self.object.class.name.downcase
      alert_msg_element       = "error_#{model_name}_#{field_name}"
      alert_msg_class         = 'error-msg'
      
      alert_field_element     = "error_#{field_name}_field"
      alert_field_class       = "error-field"

      # use turbolinks load which wil fire off the adding class. then after, remove the event listener
      "<p id=\"#{alert_msg_element}\" class=\"#{alert_msg_class}\">"\
      "#{self.object.errors[field_name].join(', ')}"\
      "</p>"\
      "<!-- Later JavaScript to add class to the parent element -->"\
      "<script>"\
          "$(document).on('turbolinks:load', function(){"\
            "$('##{alert_field_element}')"\
            ".addClass('#{alert_field_class}');"\
            "$(this).off('turbolinks:load')"\
          "})"\
      "</script>".html_safe
    end
  rescue
    nil
  end
end